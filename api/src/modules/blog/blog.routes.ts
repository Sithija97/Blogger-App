import express from "express";
import authMiddleware from "../../middleware/auth.middleware";
import upload from "../../middleware/image.middleware";
import { validate } from "../../middleware/validation.middleware";
import { postSchema } from "./blog.schema";
import {
  handleCreateBlog,
  handleDeleteBlog,
  handleGetAllBlogs,
  handleGetBlogsByUser,
  handleUpdateBlog,
} from "./blog.controller";

const router = express.Router();

router
  .route("/")
  .post(
    authMiddleware.verifyToken,
    upload.postImgUpload.single("image"),
    validate(postSchema),
    handleCreateBlog
  )
  .get(handleGetAllBlogs);

router.route("/by-user").get(authMiddleware.verifyToken, handleGetBlogsByUser);

router
  .route("/:postId")
  .put(
    authMiddleware.verifyToken,
    upload.postImgUpload.single("image"),
    validate(postSchema),
    handleUpdateBlog
  )
  .delete(authMiddleware.verifyToken, handleDeleteBlog);

export function registerPostModule(app: import("express").Express) {
  app.use("/api/post", router);
}
