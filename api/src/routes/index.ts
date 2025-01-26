import { Express } from "express";
import authRoutes from "./auth";

export function registerRoutes(app: Express) {
  app.use("/api/auth", authRoutes);
}
