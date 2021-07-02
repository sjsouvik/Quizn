import React, { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { AuthContext } from "./AuthProvider.types";
import { User } from "./AuthProvider.types";

import { loginWithCreds } from "../../server/serverUpdates";

const authContext = createContext<AuthContext>({} as AuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const { token, user }: { token: string | null; user: User | null } =
    JSON.parse(localStorage?.getItem("login") as string) || {
      token: null,
      user: null,
    };

  const [authToken, setAuthToken] = useState<string | null>(token);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [authUser, setAuthUser] = useState(user);

  const navigate = useNavigate();

  const setupAuthHeaderForServiceCalls = (token: string | null) => {
    if (token) {
      return (axios.defaults.headers.common["Authorization"] =
        "Bearer " + token);
    }

    delete axios.defaults.headers.common["Authorization"];
  };

  const login = async (email: string, password: string) => {
    const loginResponse = await loginWithCreds(email, password);

    if (loginResponse.error) {
      return setLoginError(loginResponse.message);
    }

    const { token, user } = loginResponse.data;
    setAuthToken(token);
    setAuthUser(user);

    localStorage?.setItem("login", JSON.stringify({ token, user }));
    setupAuthHeaderForServiceCalls(token);
    navigate("/");
  };

  const logout = () => {
    localStorage?.removeItem("login");
    setAuthToken(null);
    setupAuthHeaderForServiceCalls(null);
    navigate("/");
  };

  return (
    <authContext.Provider
      value={{ login, loginError, logout, authToken, authUser }}
    >
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);

export default AuthProvider;
