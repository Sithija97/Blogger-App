import express from "express";
import {
  handleAddCategory,
  handleDeleteCategory,
  handleGetCategories,
} from "../controllers/category";

const categoryRoutes = express.Router();

categoryRoutes
  .route("/")
  .get(handleGetCategories)
  .post(handleAddCategory)
  .delete(handleDeleteCategory);

export default categoryRoutes;
