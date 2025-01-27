import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import { logger } from "./middleware/logger";
import { errorHandler } from "./middleware/errorHandler";
import { conncetDB } from "./config/db";
import { registerRoutes } from "./routes";
import { CLIENT_URL, PORT } from "./config";

dotenv.config();

const app = express();

app.use(logger);

app.use(cors({ credentials: true, origin: CLIENT_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

/* allows the application to serve static files from the uploads directory 
when a request is made to the /uploads route. */
// app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

conncetDB();
registerRoutes(app);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
