import express from "express";
import {
  handleRegister,
  handleLogin,
  handleLogout,
  checkCookie,
  getUserById,
  handleChangePassword,
} from "../controllers";
import { validate } from "../middleware";
import { Schemas } from "../schemas";
import authMiddleware from "../middleware/auth.middleware";

const authRoutes = express.Router();

authRoutes
  .route("/register")
  .post(validate(Schemas.user.create), handleRegister);
authRoutes.route("/login").post(validate(Schemas.user.login), handleLogin);
authRoutes.route("/logout").post(handleLogout);
authRoutes.route("/check").get(checkCookie);
authRoutes.route("/profile").get(authMiddleware.verifyToken, getUserById);
authRoutes
  .route("/change-password")
  .patch(
    authMiddleware.verifyToken,
    validate(Schemas.user.changePassword),
    handleChangePassword
  );

export default authRoutes;
