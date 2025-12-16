import express from "express";
import authMiddleware from "../middleware/auth.middleware";
import { USER_ROLES } from "../enums";
import {
  handleGetAllCategories,
  handleCreateCategory,
  handleDeleteCategory,
} from "../modules/category";

const categoryRoutes = express.Router();

categoryRoutes
  .route("/")
  .get(handleGetAllCategories)
  .post(
    authMiddleware.verifyToken,
    authMiddleware.authorizeRole(USER_ROLES.ADMIN),
    handleCreateCategory
  )
  .delete(handleDeleteCategory);

export default categoryRoutes;
