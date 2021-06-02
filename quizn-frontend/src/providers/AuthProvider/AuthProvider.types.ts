import React from "react";

export type AuthContext = {
  isUserLoggedIn: boolean;
  setUserLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
};
