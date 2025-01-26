import { Schema } from "mongoose";

export interface IPost {
  title: string;
  summary: string;
  content: string;
  cover: string;
  author: Schema.Types.ObjectId;
}
