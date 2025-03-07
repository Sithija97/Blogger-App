import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { createCategory, deleteCategory, getCategories } from "../services";

export const handleGetCategories = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await getCategories();
    res.status(200).json(response);
  }
);

export const handleAddCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await createCategory(req);
    res.status(201).json(response);
  }
);

export const handleDeleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await deleteCategory();
    res.status(200).json(response);
  }
);
