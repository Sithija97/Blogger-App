import express from "express";
import {
  handleRegister,
  handleLogin,
  handleLogout,
  checkCookie,
  getUserById,
  handleChangePassword,
  handleChangeAvatar,
} from "./auth.controller";
import { validate } from "../../middleware/validation.middleware";
import {
  changePasswordSchema,
  createSchema,
  loginSchema,
} from "./auth.schema";
import authMiddleware from "../../middleware/auth.middleware";
import upload from "../../middleware/image.middleware";

const router = express.Router();

router.route("/register").post(validate(createSchema), handleRegister);
router.route("/login").post(validate(loginSchema), handleLogin);
router.route("/logout").post(handleLogout);
router.route("/check").get(checkCookie);
router.route("/profile").get(authMiddleware.verifyToken, getUserById);
router
  .route("/change-password")
  .put(
    authMiddleware.verifyToken,
    validate(changePasswordSchema),
    handleChangePassword
  );
router
  .route("/change-avatar")
  .put(
    authMiddleware.verifyToken,
    upload.userImgUpload.single("image"),
    handleChangeAvatar
  );

export function registerAuthModule(app: import("express").Express) {
  app.use("/api/auth", router);
}


