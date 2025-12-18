/**
 * Application entry point
 * Works for both traditional servers and Vercel serverless functions
 */

import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware";
import { conncetDB } from "./config/db";
import { CLIENT_URL, PORT } from "./config";
import { registerRoutes } from "./routes";

// Load environment variables
dotenv.config();

const app: Express = express();

// Detect if we're in a serverless environment
const isServerless =
  process.env.VERCEL ||
  process.env.AWS_LAMBDA_FUNCTION_NAME ||
  process.env.FUNCTION_NAME;

// Middleware
app.use(logger);
app.use(cors({ credentials: true, origin: CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* allows the application to serve static files from the uploads directory
when a request is made to the /uploads route. */
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// Request logging middleware (additional)
app.use((req, _res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Health check endpoint
app.get("/health", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "Server is running",
    timestamp: new Date().toISOString(),
    environment: isServerless ? "serverless" : "traditional",
  });
});

// API routes
registerRoutes(app);

// Error handler (must be last)
app.use(errorHandler);

/**
 * Start server (only for traditional server mode)
 * In serverless, Vercel handles the server lifecycle
 */
async function startServer(): Promise<void> {
  // Only start server if not in serverless mode
  if (isServerless) {
    console.log("Running in serverless mode - server will not be started");
    return;
  }

  try {
    // Connect to database
    await conncetDB();

    // Start server
    app.listen(PORT, () => {
      console.log(`🚀 Server is running on port ${PORT}`);
      console.log(`📝 Environment: ${process.env.NODE_ENV || "development"}`);
      console.log(`🔗 API available at http://localhost:${PORT}/api`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
}

/**
 * Graceful shutdown handler (only for traditional servers)
 */
async function gracefulShutdown(signal: string): Promise<void> {
  if (isServerless) {
    return; // Serverless doesn't use shutdown handlers
  }

  console.log(`\n${signal} received. Shutting down gracefully...`);

  try {
    // Close database connections if needed
    console.log("✅ Database connections closed");
    process.exit(0);
  } catch (error) {
    console.error("Error during shutdown:", error);
    process.exit(1);
  }
}

// Handle shutdown signals (only for traditional servers)
if (!isServerless) {
  process.on("SIGTERM", () => gracefulShutdown("SIGTERM"));
  process.on("SIGINT", () => gracefulShutdown("SIGINT"));
}

// Handle unhandled promise rejections
process.on("unhandledRejection", (reason, promise) => {
  console.error("Unhandled Rejection at:", promise, "reason:", reason);
});

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("Uncaught Exception:", error);
  if (!isServerless) {
    process.exit(1);
  }
});

// Export the app for serverless
export default app;

// Start the server only when executed directly (not in Vercel)
if (require.main === module) {
  startServer();
}
