import { z } from "zod";

export const createSchema = z.object({
  username: z.string().min(6, "username is required"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export const changePasswordSchema = z.object({
  currentPassword: z.string(),
  newPassword: z.string().min(6, "Password must be at least 6 characters long"),
  confirmNewPassword: z
    .string()
    .min(6, "Password must be at least 6 characters long"),
});
