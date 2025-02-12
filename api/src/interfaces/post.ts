import { Schema } from "mongoose";

export interface IPost {
  title: string;
  content: string;
  image: string;
  user: Schema.Types.ObjectId;
}
