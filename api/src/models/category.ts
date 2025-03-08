import { Document, model, Schema } from "mongoose";
import { ICategory } from "../interfaces";

export interface ICategoryModel extends ICategory, Document {}

const CategorySchema = new Schema<ICategoryModel>(
  {
    name: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Category = model<ICategoryModel>("Category", CategorySchema);
export default Category;
