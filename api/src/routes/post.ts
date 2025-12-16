import express from "express";

import authMiddleware from "../middleware/auth.middleware";
import upload from "../middleware/image.middleware";
import { validate } from "../middleware";
import { Schemas } from "../schemas";
import {
  handleCreatePost,
  handleGetAllPosts,
  handleGetPostsByUser,
  handleUpdatePost,
  handleDeletePost,
} from "../modules/post";

const postRoutes = express.Router();

postRoutes
  .route("/")
  .post(
    authMiddleware.verifyToken,
    upload.postImgUpload.single("image"),
    validate(Schemas.post.create),
    handleCreatePost
  )
  .get(handleGetAllPosts);

postRoutes
  .route("/by-user")
  .get(authMiddleware.verifyToken, handleGetPostsByUser);

postRoutes
  .route("/:postId")
  .put(
    authMiddleware.verifyToken,
    upload.postImgUpload.single("image"),
    validate(Schemas.post.create),
    handleUpdatePost
  )
  .delete(authMiddleware.verifyToken, handleDeletePost);

export default postRoutes;
