import { Express } from "express";
import authRoutes from "./auth";
import blogRoutes from "./blog";
import categoryRoutes from "./category";

export function registerRoutes(app: Express) {
  app.use("/api/auth", authRoutes);
  app.use("/api/blog", blogRoutes);
  app.use("/api/category", categoryRoutes);
}
