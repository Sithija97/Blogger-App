import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;
export const SECRET = process.env.JWT_SECRET;
export const CLIENT_URL = process.env.CLIENT_URL;
export const TOKEN = process.env.TOKEN_NAME || "blog_app_token";

if (!SECRET) {
  throw new Error("JWT_SECRET is not defined");
}

if (!CLIENT_URL) {
  throw new Error("CLIENT_URLis not defined");
}

if (!PORT) {
  throw new Error("PORTis not defined");
}
