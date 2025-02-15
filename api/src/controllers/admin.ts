import asyncHandler from "express-async-handler";
import { Request, Response, NextFunction } from "express";
import { getAllUsers } from "../services";

export const handleGetUsers = asyncHandler(
  async (req: Request, res: Response) => {
    const users = await getAllUsers();
    res.status(200).json(users);
  }
);
