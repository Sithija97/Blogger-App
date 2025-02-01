import express from "express";
import { createPost, getPosts, getPost } from "../controllers";
import multer from "multer";

const uploadMiddleware = multer({ dest: "uploads/" });
const postRoutes = express.Router();

postRoutes
  .route("/")
  .post(uploadMiddleware.single("file"), createPost)
  .get(getPosts);

postRoutes.route("/:id").get(getPost);

export { postRoutes };
