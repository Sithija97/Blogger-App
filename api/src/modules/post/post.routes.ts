import express from "express";
import authMiddleware from "../../middleware/auth.middleware";
import upload from "../../middleware/image.middleware";
import { validate } from "../../middleware/validation.middleware";
import { postSchema } from "./post.schema";
import {
  handleCreatePost,
  handleDeletePost,
  handleGetPosts,
  handleGetPostsByUser,
  handleUpdatePost,
} from "./post.controller";

const router = express.Router();

router
  .route("/")
  .post(
    authMiddleware.verifyToken,
    upload.postImgUpload.single("image"),
    validate(postSchema),
    handleCreatePost
  )
  .get(handleGetPosts);

router
  .route("/by-user")
  .get(authMiddleware.verifyToken, handleGetPostsByUser);

router
  .route("/:postId")
  .put(
    authMiddleware.verifyToken,
    upload.postImgUpload.single("image"),
    validate(postSchema),
    handleUpdatePost
  )
  .delete(authMiddleware.verifyToken, handleDeletePost);

export function registerPostModule(app: import("express").Express) {
  app.use("/api/post", router);
}


