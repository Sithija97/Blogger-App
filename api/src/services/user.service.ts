import bcrypt from "bcrypt";
import { IUser } from "../interfaces";
import User, { IUserModel } from "../models/user";
import CustomError from "../utils/error.util";
import jwt from "jsonwebtoken";
import { SECRET, TOKEN } from "../config";
import { Request } from "express";

export const register = async (user: IUser): Promise<IUserModel> => {
  const { username, email } = user;

  try {
    const isExists = await User.findOne({ $or: [{ username }, { email }] });
    if (isExists)
      throw new CustomError("User already exists with this email", 409);

    const newUser = new User(user);
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
