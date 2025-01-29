import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET, TOKEN } from "../config";
import asyncHandler from "express-async-handler";
import User, { IUserModel } from "../models/user";

interface JwtPayload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      user?: IUserModel;
    }
  }
}

const verifyToken = asyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies[TOKEN];
    if (!token) {
      res.status(401);
      throw new Error("Unauthorized, no token");
    }

    const decoded = jwt.verify(token, SECRET!) as JwtPayload;
    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      res.status(404);
      throw new Error("User not found");
    }

    // console.log("user :", user);
    req.user = user;
    next();
  }
);

const authorizeRole = (role: string) => {
  return asyncHandler(
    async (req: Request, res: Response, next: NextFunction) => {
      if (!req.user) {
        res.status(401);
        throw new Error("User not authenticated");
      }

      if (role !== req.user.role) {
        res.status(403);
        throw new Error("Not authorized to access this route");
      }

      next();
    }
  );
};

const authMiddleware = {
  verifyToken,
  authorizeRole,
};
export default authMiddleware;
