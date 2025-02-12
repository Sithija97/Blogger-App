import express from "express";
import {
  handleRegister,
  handleLogin,
  handleLogout,
  checkCookie,
  getUserById,
  handleChangePassword,
  handleChangeAvatar,
} from "../controllers";
import { validate } from "../middleware";
import { Schemas } from "../schemas";
import authMiddleware from "../middleware/auth.middleware";
import upload from "../middleware/image.middleware";

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
  .put(
    authMiddleware.verifyToken,
    validate(Schemas.user.changePassword),
    handleChangePassword
  );
authRoutes
  .route("/change-avatar")
  .put(
    authMiddleware.verifyToken,
    upload.userImgUpload.single("image"),
    handleChangeAvatar
  );

export default authRoutes;
