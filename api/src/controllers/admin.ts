import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { deleteUser, getAllUsers } from "../services";
import { Types } from "mongoose";

export const handleGetUsers = asyncHandler(
  async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.status(200).json(users);
  }
);

export const handleDeleteUser = asyncHandler(
  async (req: Request, res: Response) => {
    const { userId } = req.params;
    await deleteUser(new Types.ObjectId(userId));
    res.status(200).json({ message: "User deleted successfully." });
  }
);
