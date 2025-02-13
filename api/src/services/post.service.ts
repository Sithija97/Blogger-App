import { Request } from "express";
import { IPostModel } from "../models";
import Post from "../models/post";
import { Schema } from "mongoose";
import CustomError from "../utils/error.util";

export const createPost = async (req: Request) => {
  const { title, content, user } = req.body;

  try {
    const post = new Post({ title, content, image: req.file?.path, user });
    await post.save();
    return { message: "Password changed successfully." };
  } catch (error) {
    throw new Error("Unexpected error during publishing your post.");
  }
};

export const getPosts = async (): Promise<IPostModel[]> => {
  try {
    const posts = await Post.find().populate("user").sort({ createdAt: -1 });
    return posts;
  } catch (error) {
    throw new Error("Unexpected error during fetching posts.");
  }
};

export const getPostsByUser = async (
  userId: Schema.Types.ObjectId
): Promise<IPostModel[]> => {
  try {
    const posts = await Post.find({ user: userId })
      .populate("user")
      .sort({ createdAt: -1 });
    return posts;
  } catch (error) {
    throw new Error("Unexpected error during fetching posts.");
  }
};

export const updatePost = async (
  postId: Schema.Types.ObjectId,
  payload: Partial<IPostModel>
): Promise<IPostModel> => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $set: payload },
      { new: true }
    ).populate("user");

    if (!updatedPost) {
      throw new CustomError("Post not found");
    }

    return updatedPost;
  } catch (error) {
    throw new Error("Unexpected error during updating post.");
  }
};

export const deletePost = async (
  postId: Schema.Types.ObjectId
): Promise<void> => {
  try {
    const result = await Post.findByIdAndDelete(postId);

    if (!result) {
      throw new CustomError("Post not found");
    }
  } catch (error) {
    throw new Error("Unexpected error during deleting post.");
  }
};
