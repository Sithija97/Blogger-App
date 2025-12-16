import express from "express";
import authMiddleware from "../middleware/auth.middleware";
import { USER_ROLES } from "../enums";
import {
  handleGetCategories,
  handleAddCategory,
  handleDeleteCategory,
} from "../modules/category";

const categoryRoutes = express.Router();

categoryRoutes
  .route("/")
  .get(handleGetCategories)
  .post(
    authMiddleware.verifyToken,
    authMiddleware.authorizeRole(USER_ROLES.ADMIN),
    handleAddCategory
  )
  .delete(handleDeleteCategory);

export default categoryRoutes;
