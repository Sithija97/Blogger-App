import fs from "fs";
import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { SECRET } from "../config";

export const createPost = asyncHandler(async (req: Request, res: Response) => {
  // if (!req.file) {
  //   throw new Error("No file uploaded");
  // }
  // const { originalname, path } = req.file;
  // const extention = originalname.split(".").pop();
  // const newPath = path + "." + extention;
  // fs.renameSync(path, newPath);
  // const { token } = req.cookies;
  // const { title, summary, content } = req.body;
  // jwt.verify(token, SECRET!, async (err: any, info: any) => {
  //   if (err) throw new Error("Unauthorized");
  //   const post = await PostModel.create({
  //     title,
  //     summary,
  //     content,
  //     cover: newPath,
  //     author: info.id,
  //   });
  //   res.status(201).json(post);
  // });
});

export const getPosts = asyncHandler(async (req: Request, res: Response) => {
  // const posts = await PostModel.find()
  //   .populate("author", ["username"])
  //   .sort({ createdAt: -1 })
  //   .limit(20);
  // res.status(200).json(posts);
});

export const getPost = asyncHandler(async (req: Request, res: Response) => {
  // const { id } = req.params;
  // const post = await PostModel.findById(id).populate("author", ["username"]);
  // res.status(200).json(post);
});
