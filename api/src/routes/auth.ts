import express from "express";
import { handleRegister, handleLogin, handleLogout } from "../controllers";

const authRoutes = express.Router();

authRoutes.route("/register").post(handleRegister);
authRoutes.route("/login").post(handleLogin);
authRoutes.route("/logout").get(handleLogout);

export default authRoutes;
