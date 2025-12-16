import express from "express";
import authMiddleware from "../middleware/auth.middleware";
import upload from "../middleware/image.middleware";
import { validate } from "../middleware";
import { Schemas } from "../schemas";
import {
  handleCreateBlog,
  handleGetAllBlogs,
  handleGetBlogsByUser,
  handleUpdateBlog,
  handleDeleteBlog,
} from "../modules/blog";

const blogRoutes = express.Router();

blogRoutes
  .route("/")
  .post(
    authMiddleware.verifyToken,
    upload.postImgUpload.single("image"),
    validate(Schemas.blog.create),
    handleCreateBlog
  )
  .get(handleGetAllBlogs);

blogRoutes
  .route("/by-user")
  .get(authMiddleware.verifyToken, handleGetBlogsByUser);

blogRoutes
  .route("/:blogId")
  .put(
    authMiddleware.verifyToken,
    upload.postImgUpload.single("image"),
    validate(Schemas.blog.create),
    handleUpdateBlog
  )
  .delete(authMiddleware.verifyToken, handleDeleteBlog);

export default blogRoutes;
