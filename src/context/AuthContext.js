import React, { createContext } from "react";
import useCustomAuth from "../hooks/useCustomAuth";

export const AuthContext = createContext();


const AuthContextProvider = ({ children:Children }) => {

  return (
    <AuthContext.Provider value={useCustomAuth()}>
      {Children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
