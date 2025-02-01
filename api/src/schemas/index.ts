import { changePasswordSchema, createSchema, loginSchema } from "./user";

export const Schemas = {
  user: {
    create: createSchema,
    login: loginSchema,
    changePassword: changePasswordSchema,
  },
};
