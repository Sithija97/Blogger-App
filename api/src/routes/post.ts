import express from "express";
import {
  handleCreatePost,
  handleGetPosts,
  handleGetPostsByUser,
} from "../controllers";
import authMiddleware from "../middleware/auth.middleware";
import upload from "../middleware/image.middleware";

const postRoutes = express.Router();

postRoutes
  .route("/")
  .post(
    authMiddleware.verifyToken,
    upload.postImgUpload.single("image"),
    handleCreatePost
  )
  .get(handleGetPosts);

postRoutes
  .route("/by-user")
  .get(authMiddleware.verifyToken, handleGetPostsByUser);

export default postRoutes;
