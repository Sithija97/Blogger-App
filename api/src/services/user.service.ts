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

    const newUser = new User({ username, email, password });
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
    // Validate password requirements in a single block
    switch (true) {
      case newPassword !== confirmNewPassword:
        throw new CustomError(
          "New password and confirm password do not match",
          400
        );
      case newPassword === currentPassword:
        throw new CustomError(
          "New password must be different from current password",
          400
        );
    }

    const user = await User.findById(req?.user?._id);
    if (!user) {
      throw new CustomError("User not found.", 404);
    }

    const validPassword = await bcrypt.compare(currentPassword, user.password);
    if (!validPassword) {
      throw new CustomError("Incorrect current password.", 401);
    }

    user.password = newPassword;
    await user.save();

    return { message: "Password changed successfully." };
  } catch (error: any) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new Error("Unexpected error during password change.");
  }
};

export const changeAvatar = async (req: Request) => {
  try {
    const { user } = req;
    if (!req.file) throw new CustomError("No image file uploaded", 400);

    if (!user) throw new CustomError("User not found.", 404);

    user.avatar = req.file.path;
    await user.save();

    const { password: _, ...userWithoutPassword } = user.toObject();
    return userWithoutPassword;
  } catch (error) {
    if (error instanceof CustomError) {
      throw error;
    }
    throw new Error("Unexpected error during avatar change.");
  }
};

export const getAllUsers = async () => {
  try {
    const users = User.find().sort({ createdAt: -1 });
    return users;
  } catch (error) {
    throw new Error("Unexpected error during fetching users.");
  }
};
