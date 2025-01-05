import { useState } from "react";
import { userContext } from "./user.context";

type IProps = {
  children: React.ReactNode;
};

export const UserContextProvider = ({ children }: IProps) => {
  const [userInfo, setUserInfo] = useState({});
  return (
    <userContext.Provider value={{ userInfo, setUserInfo }}>
      {children}
    </userContext.Provider>
  );
};
