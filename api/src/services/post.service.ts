import { Request } from "express";
import { IPostModel } from "../models";
import Post from "../models/post";
import mongoose, { Mongoose, Schema } from "mongoose";
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
    const posts = await Post.find()
      .populate({ path: "user", select: "-password" })
      .sort({ createdAt: -1 });
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
      .populate({ path: "user", select: "-password" })
      .sort({ createdAt: -1 });
    return posts;
  } catch (error) {
    throw new Error("Unexpected error during fetching posts.");
  }
};

export const updatePost = async (
  postId: string,
  payload: Partial<IPostModel>
): Promise<IPostModel> => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { $set: payload },
      { new: true }
    ).populate({ path: "user", select: "-password" });

    if (!updatedPost) {
      throw new CustomError("Post not found");
    }

    return updatedPost;
  } catch (error) {
    console.log(error);
    throw new Error("Unexpected error during updating post.");
  }
};

export const deletePost = async (postId: string): Promise<void> => {
  try {
    const result = await Post.findByIdAndDelete(postId);

    if (!result) {
      throw new CustomError("Post not found");
    }
  } catch (error) {
    throw new Error("Unexpected error during deleting post.");
  }
};
