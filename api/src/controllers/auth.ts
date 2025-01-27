import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { TOKEN } from "../config";
import { IUser } from "../interfaces";
import { login, register } from "../services";

export const handleRegister = asyncHandler(
  async (req: Request, res: Response) => {
    const user: IUser = req.body;
    await register(user);

    res.status(201).json({ message: "user registered successfully." });
  }
);

export const handleLogin = asyncHandler(async (req: Request, res: Response) => {
  const credentials = await login(req.body);

  res.cookie(TOKEN, credentials.token, {
    httpOnly: true,
    secure: true,
    sameSite: "none",
    maxAge: 1 * 24 * 60 * 60 * 1000,
  });
  res.status(200).json(credentials.user);
});

export const handleLogout = asyncHandler(
  async (req: Request, res: Response) => {
    res
      .clearCookie(TOKEN, { httpOnly: true, secure: true, sameSite: "none" })
      .json({ message: "Logged out successfully." });
  }
);
