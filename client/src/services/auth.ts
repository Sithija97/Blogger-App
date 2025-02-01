import axios from "axios";
import {
  ChangePasswordPayload,
  LoginUserPayload,
  RegisterUserPayload,
} from "../models";

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
  await axios.post(`${import.meta.env.VITE_BASE_URL}/auth/logout`, {
    withCredentials: true,
  });
};

const changePassword = async (payload: ChangePasswordPayload) => {
  await axios.patch(
    `${import.meta.env.VITE_BASE_URL}/auth/change-password`,
    payload,
    {
      withCredentials: true,
    }
  );
};

const userService = {
  login,
  register,
  logout,
  changePassword,
};
export default userService;
