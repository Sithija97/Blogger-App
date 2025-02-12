import { Document, model, Schema } from "mongoose";
import { IPost } from "../interfaces";

export interface IPostModel extends IPost, Document {}

const PostSchema = new Schema<IPostModel>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true }
);

const Post = model<IPostModel>("Post", PostSchema);
export default Post;
