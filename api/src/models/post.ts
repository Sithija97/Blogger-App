import { Document, model, Schema } from "mongoose";
import { IPost } from "../interfaces";

interface IPostModel extends IPost, Document {}

const PostSchema = new Schema<IPostModel>(
  {
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true },
    cover: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const PostModel = model<IPostModel>("Post", PostSchema);
export default PostModel;
