import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { createPost, getPosts, getPostsByUser } from "../services/post.service";
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
    const posts = await getPostsByUser(
      (req.user as { _id: Schema.Types.ObjectId })._id
    );
    res.status(200).json(posts);
  }
);

export const getPost = asyncHandler(async (req: Request, res: Response) => {});
