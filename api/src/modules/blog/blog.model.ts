import { Document, model, Schema } from "mongoose";
import { IBlog } from "../../interfaces";

export interface IBlogModel extends IBlog, Document {}

const BlogSchema = new Schema<IBlogModel>(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    image: { type: String },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  { timestamps: true, versionKey: false }
);

const Blog = model<IBlogModel>("Blog", BlogSchema);
export default Blog;
