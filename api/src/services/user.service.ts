import bcrypt from "bcrypt";
import { IUser } from "../interfaces";
import User, { IUserModel } from "../models/user";
import CustomError from "../utils/error.util";
import jwt from "jsonwebtoken";
import { SECRET, TOKEN } from "../config";
import { Request } from "express";

export const register = async (user: IUser): Promise<IUserModel> => {
  const { username, email, password } = user;

  try {
    const isExists = await User.findOne({ $or: [{ username }, { email }] });
    if (isExists)
      throw new CustomError("User already exists with this email", 409);

    // 1. Hash the password:
    const salt = await bcrypt.genSalt(10); // Generate a salt
    const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

    // 2. Create a *new* user object with the hashed password:
    const newUser = new User({
      ...user, // Spread the existing user properties
      password: hashedPassword, // Override the plain text password with the hash
    });

    return await newUser.save();
  } catch (error) {
    if (error instanceof CustomError) throw error;
    throw new Error("Unexpected error during registration.");
  }
};

export const login = async (credentials: {
  email: string;
  password: string;
}) => {
  const { email, password } = credentials;

  try {
    const user = await User.findOne({ email });
    if (!user) throw new CustomError("User does not exist", 404);

    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) throw new CustomError("Invalid Password", 404);

    const data = {
      id: user._id,
      email: user.email,
    };

    const token = jwt.sign(data, SECRET!, { expiresIn: "1h" });
    const { password: _, ...userWithoutPassword } = user.toObject(); // Exclude password property

    return { user: userWithoutPassword, token };
  } catch (error) {
    if (error instanceof CustomError) throw error;
    throw new Error("Unexpected error during logging.");
  }
};

export const check = (req: Request) => {
  try {
    const token = req.cookies[TOKEN];
    if (!token) {
      console.error("Token not found");
      return false;
    }
    return true;
  } catch (error) {
    if (error instanceof CustomError) throw error;
    throw new Error("Internal server error.");
  }
};

export const changePassword = async (
  req: Request,
  currentPassword: string,
  newPassword: string,
  confirmNewPassword: string
) => {
  try {
    // 1. Input Validation
    if (!currentPassword || !newPassword || !confirmNewPassword) {
      throw new CustomError("All fields are required", 400);
    }

    if (newPassword !== confirmNewPassword) {
      throw new CustomError(
        "New password and confirm password do not match",
        400
      );
    }

    // if (newPassword.length < 8) {
    //   // Example minimum length
    //   throw new CustomError(
    //     "New password must be at least 8 characters long",
    //     400
    //   );
    // }

    if (newPassword === currentPassword) {
      throw new CustomError(
        "New password must be different from current password",
        400
      );
    }

    // 2. Authentication (Verify current password)
    const user = await User.findById(req?.user?._id); // Assumes you have middleware to add user info to req.user
    console.log("req.user._id:", req?.user?._id); // Log the ID from the request
    console.log("User found:", user); // Log the entire user object
    if (!user) {
      throw new CustomError("User not found", 404); // Or perhaps a 401 if authentication is the issue
    }
    console.log("User _id from database:", user._id); // Log the ID from the retrieved user

    const validPassword = await bcrypt.compare(currentPassword, user.password);
    if (!validPassword) {
      throw new CustomError("Incorrect current password", 401); // 401 Unauthorized is more appropriate here
    }

    user.password = newPassword;
    await user.save();

    return { message: "Password changed successfully" }; //  Return a success message
  } catch (error: any) {
    if (error instanceof CustomError) {
      throw error; // Re-throw custom errors
    } else if (error.name === "ValidationError") {
      // Mongoose validation errors
      throw new CustomError(error.message, 400);
    }
    console.error("Error changing password:", error); // Log the error for debugging
    throw new Error("Unexpected error during password change."); // Generic error for other unexpected errors
  }
};
