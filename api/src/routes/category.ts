import express from "express";
import {
  handleAddCategory,
  handleDeleteCategory,
  handleGetCategories,
} from "../controllers/category";
import authMiddleware from "../middleware/auth.middleware";
import { USER_ROLES } from "../enums";

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
