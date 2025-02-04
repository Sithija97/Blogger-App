import { Request, Response } from "express";
import asyncHandler from "express-async-handler";
import { TOKEN } from "../config";
import { IUser } from "../interfaces";
import {
  changeAvatar,
  changePassword,
  check,
  login,
  register,
} from "../services";

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

export const checkCookie = asyncHandler(async (req: Request, res: Response) => {
  const isLoggedIn = check(req);

  if (!isLoggedIn) res.status(404).json({ message: "not logged in." });
  res.status(200).json({ message: "logged in." });
});

export const getUserById = asyncHandler(async (req: Request, res: Response) => {
  if (!req.user) {
    res.status(401);
    throw new Error("Not authenticated");
  }
  res.status(200).json(req.user);
});

export const handleChangePassword = asyncHandler(
  async (req: Request, res: Response) => {
    const { currentPassword, newPassword, confirmNewPassword } = req.body;

    const result = await changePassword(
      req,
      currentPassword,
      newPassword,
      confirmNewPassword
    );

    res.status(200).json(result);
  }
);

export const handleChangeAvatar = asyncHandler(
  async (req: Request, res: Response) => {
    console.log(req.file);
    const result = await changeAvatar(req);
    res.status(200).json(result);
  }
);
