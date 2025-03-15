import { Request } from "express";
import Category from "../models/category";

export const getCategories = async () => {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw new Error("Unexpected error during getting categories.");
  }
};

export const createCategory = async (req: Request) => {
  const { name } = req.body;

  try {
    const category = new Category({ name });
    await category.save();

    const categories = await Category.find();
    return categories;
  } catch (error) {
    throw new Error("Unexpected error during publishing category.");
  }
};

export const deleteCategory = async () => {
  try {
  } catch (error) {}
};
