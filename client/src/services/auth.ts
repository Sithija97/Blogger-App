import axios from "axios";
import { LoginUserPayload, RegisterUserPayload } from "../models";

const login = async (user: LoginUserPayload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/auth/login`,
    user,
    { withCredentials: true }
  );
  return response.data;
};

const register = async (user: RegisterUserPayload) => {
  const response = await axios.post(
    `${import.meta.env.VITE_BASE_URL}/auth/register`,
    user
  );
  return response.data;
};

const logout = async () => {
  await axios.get(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {
    withCredentials: true,
  });
};

const userService = {
  login,
  register,
  logout,
};
export default userService;
