import { z } from "zod";

export const postSchema = z.object({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  image: z.string().optional(),
  user: z.string().min(1, "User ID is required"), // Assuming user is stored as an ObjectId string
});
