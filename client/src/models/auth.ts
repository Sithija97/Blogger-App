import { USER_ROLES } from "../enums";

export type LoginUserPayload = {
  email: string;
  password: string;
};

export type RegisterUserPayload = {
  username: string;
  email: string;
  password: string;
};

export type ChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type IUser = {
  _id: string;
  username: string;
  email: string;
  role: USER_ROLES;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
};

export type ICategory = {
  _id: string;
  name: string;
  createdAt?: string;
  updatedAt?: string;
};

export type IAuthState = {
  loggedInUser: IUser | undefined;
  isAuthenticated: boolean;
  loginUserStatus: string;
  loginUserSuccess: boolean;
  loginUserError: boolean;
  logoutUserStatus: string;
  logoutUserSuccess: boolean;
  logoutUserError: boolean;
  registerUserStatus: string;
  registerUserSuccess: boolean;
  registerUserError: boolean;
  changeUserPasswordStatus: string;
  changeUserPasswordSuccess: boolean;
  changeUserPasswordError: boolean;
  changeUserAvatarStatus: string;
  changeUserAvatarSuccess: boolean;
  changeUserAvatarError: boolean;
};

export type ICategoryState = {
  categories: ICategory[];
  selectedCategory: ICategory;
  getCategoriesStatus: string;
  getCategoriesSuccess: boolean;
  getCategoriesError: boolean;
  addCategoriesStatus: string;
  addCategoriesSuccess: boolean;
  addCategoriesError: boolean;
  deleteCategoriesStatus: string;
  deleteCategoriesSuccess: boolean;
  deleteCategoriesError: boolean;
};
