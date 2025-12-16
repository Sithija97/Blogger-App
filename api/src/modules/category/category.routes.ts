import express from "express";
import {
  handleAddCategory,
  handleDeleteCategory,
  handleGetCategories,
} from "./category.controller";
import authMiddleware from "../../middleware/auth.middleware";
import { USER_ROLES } from "../../enums";

const router = express.Router();

router
  .route("/")
  .get(handleGetCategories)
  .post(
    authMiddleware.verifyToken,
    authMiddleware.authorizeRole(USER_ROLES.ADMIN),
    handleAddCategory
  )
  .delete(handleDeleteCategory);

export function registerCategoryModule(app: import("express").Express) {
  app.use("/api/category", router);
}


