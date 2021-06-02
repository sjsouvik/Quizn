import React, { createContext, useContext, useState } from "react";

import { AuthContext } from "./AuthProvider.types";

const authContext = createContext<AuthContext>({} as AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const { userLoggedIn }: { userLoggedIn: boolean } = JSON.parse(
    localStorage?.getItem("login") as string
  ) || {
    userLoggedIn: false,
  };

  const [isUserLoggedIn, setUserLoggedIn] = useState(userLoggedIn);

  return (
    <authContext.Provider value={{ isUserLoggedIn, setUserLoggedIn }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

export default AuthProvider;
