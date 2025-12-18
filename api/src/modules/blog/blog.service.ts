import { Request } from "express";
import { Schema } from "mongoose";
import CustomError from "../../utils/error.util";
import Blog, { IBlogModel } from "./blog.model";

export const createBlog = async (req: Request) => {
  const { title, content, user } = req.body;

  try {
    const blog = new Blog({ title, content, image: req.file?.path, user });
    await blog.save();
    return { message: "Password changed successfully." };
  } catch (error) {
    throw new Error("Unexpected error during publishing your blog.");
  }
};

export const getAllBlogs = async (): Promise<IBlogModel[]> => {
  try {
    const blogs = await Blog.find()
      .populate({ path: "user", select: "-password" })
      .sort({ createdAt: -1 });
    return blogs;
  } catch (error) {
    throw new Error("Unexpected error during fetching blogs.");
  }
};

export const getBlogsByUser = async (
  userId: Schema.Types.ObjectId
): Promise<IBlogModel[]> => {
  try {
    const blogs = await Blog.find({ user: userId })
      .populate({ path: "user", select: "-password" })
      .sort({ createdAt: -1 });
    return blogs;
  } catch (error) {
    throw new Error("Unexpected error during fetching blogs.");
  }
};

export const updateBlog = async (
  blogId: string,
  payload: Partial<IBlogModel>
): Promise<IBlogModel> => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { $set: payload },
      { new: true }
    ).populate({ path: "user", select: "-password" });

    if (!updatedBlog) {
      throw new CustomError("Blog not found");
    }

    return updatedBlog;
  } catch (error) {
    console.log(error);
    throw new Error("Unexpected error during updating blog.");
  }
};

export const deleteBlog = async (blogId: string): Promise<void> => {
  try {
    const result = await Blog.findByIdAndDelete(blogId);

    if (!result) {
      throw new CustomError("Blog not found");
    }
  } catch (error) {
    throw new Error("Unexpected error during deleting blog.");
  }
};
