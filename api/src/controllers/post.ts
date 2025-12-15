import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import {
  createPost,
  deletePost,
  getPosts,
  getPostsByUser,
  updatePost,
} from "../services";
import { Schema } from "mongoose";

export const handleCreatePost = asyncHandler(
  async (req: Request, res: Response) => {
    const response = await createPost(req);
    res.status(201).json(response);
  }
);

export const handleGetPosts = asyncHandler(
  async (req: Request, res: Response) => {
    const posts = await getPosts();
    res.status(200).json(posts);
  }
);

export const handleGetPostsByUser = asyncHandler(
  async (req: Request, res: Response) => {
    const user = req.user as { _id?: Schema.Types.ObjectId } | undefined;
    if (!user || !user._id) {
      res.status(401).json({ message: "Unauthorized or missing user ID." });
      return;
    }
    const posts = await getPostsByUser(user._id);
    res.status(200).json(posts);
  }
);

export const handleUpdatePost = asyncHandler(
  async (req: Request, res: Response) => {
    const postId = req.params.postId;

    const updated = await updatePost(postId, req.body);
    res.status(200).json(updated);
  }
);

export const handleDeletePost = asyncHandler(
  async (req: Request, res: Response) => {
    await deletePost(req.params.postId);
    res.status(200).json({ message: "Post deleted successfully." });
  }
);

export const getPost = asyncHandler(async (req: Request, res: Response) => {});
