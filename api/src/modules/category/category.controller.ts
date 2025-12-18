import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { createCategory, getAllCategories } from "./category.service";

export const handleGetAllCategories = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await getAllCategories();
    res.status(200).json(response);
  }
);

export const handleCreateCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await createCategory(req);
    res.status(201).json(response);
  }
);

/*
export const handleDeleteCategory = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await deleteCategory();
    res.status(200).json(response);
  }
);
*/
