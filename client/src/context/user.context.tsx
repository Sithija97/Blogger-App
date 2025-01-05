import { createContext } from "react";

type UserContextType = {
  userInfo: object;
  setUserInfo: (userInfo: string) => void;
};

export const userContext = createContext<UserContextType>({
  userInfo: {},
  setUserInfo: () => {},
});
