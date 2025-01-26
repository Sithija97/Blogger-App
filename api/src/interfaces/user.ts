import { USER_ROLES } from "../enums";

export interface IUser {
  username: string;
  email: string;
  password: string;
  role: USER_ROLES;
}
