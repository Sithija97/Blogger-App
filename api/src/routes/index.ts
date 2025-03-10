import { Express } from "express";
import authRoutes from "./auth";
import postRoutes from "./post";
import categoryRoutes from "./category";

export function registerRoutes(app: Express) {
  app.use("/api/auth", authRoutes);
  app.use("/api/post", postRoutes);
  app.use("/api/category", categoryRoutes);
}
