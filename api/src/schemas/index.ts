import { createSchema, loginSchema } from "./user";

export const Schemas = {
  user: {
    create: createSchema,
    login: loginSchema,
  },
};
