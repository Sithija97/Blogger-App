import express from "express";
import {
  handleCreateCategory,
  handleGetAllCategories,
} from "./category.controller";
import authMiddleware from "../../middleware/auth.middleware";
import { USER_ROLES } from "../../enums";

const router = express.Router();

router
  .route("/")
  .get(handleGetAllCategories)
  .post(
    authMiddleware.verifyToken,
    authMiddleware.authorizeRole(USER_ROLES.ADMIN),
    handleCreateCategory
  );
// .delete(handleDeleteCategory);

export function registerCategoryModule(app: import("express").Express) {
  app.use("/api/category", router);
}
