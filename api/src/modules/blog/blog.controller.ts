import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { Schema } from "mongoose";
import {
  createBlog,
  deleteBlog,
  getAllBlogs,
  getBlogsByUser,
  updateBlog,
} from "./blog.service";

export const handleCreateBlog = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await createBlog(req);
    res.status(201).json(response);
  }
);

export const handleGetAllBlogs = asyncHandler(
  async (req: Request, res: Response) => {
    const blogs = await getAllBlogs();
    res.status(200).json(blogs);
  }
);

export const handleGetBlogsByUser = asyncHandler(
  async (req: Request, res: Response) => {
    const user = req.user as { _id?: Schema.Types.ObjectId } | undefined;
    if (!user || !user._id) {
      res.status(401).json({ message: "Unauthorized or missing user ID." });
      return;
    }
    const blogs = await getBlogsByUser(user._id);
    res.status(200).json(blogs);
  }
);

export const handleUpdateBlog = asyncHandler(
  async (req: Request, res: Response) => {
    const blogId = req.params.blogId;

    const updated = await updateBlog(blogId, req.body);
    res.status(200).json(updated);
  }
);

export const handleDeleteBlog = asyncHandler(
  async (req: Request, res: Response) => {
    await deleteBlog(req.params.blogId);
    res.status(200).json({ message: "Blog deleted successfully." });
  }
);
