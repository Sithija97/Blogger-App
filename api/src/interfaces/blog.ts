import { Schema } from "mongoose";

export interface IBlog {
  title: string;
  content: string;
  image: string;
  user: Schema.Types.ObjectId;
}
