import { useEffect, useState } from "react";
import { createUserApi, loginUserApi } from "../api";
import { addUserInLocalStorage, getUserFromLocalStorage } from "../helpers/localStorage";

const useCustomAuth = () => {
  const [user, setUser] = useState({});

  //on reload - getting user form localstorage and add in state
  useEffect(() => {
    setUser(getUserFromLocalStorage())
  }, [])

  //Crate new user with email and password
  const emailPasswordSignup = async (email, password, name) => {
    try {
      const { data } = await createUserApi({email,password,name});
      setUser(data);
      addUserInLocalStorage(data);
    } catch (error) {
      console.log(
        "🚀 ~ file: useCustomAuth.js ~ line 16 ~ emailPasswordSignup ~ error",
        error
      );
      setUser({});
      addUserInLocalStorage({});
    }
  };

  //login user
  const emailPasswordLogin = async (email, password) => {
    try {
      const { data } = await loginUserApi({email,password});
      setUser(data);
      addUserInLocalStorage(data);
    } catch (error) {
      console.log(
        "🚀 ~ file: useCustomAuth.js ~ line 27 ~ emailPasswordLogin ~ error",
        error
      );
      setUser({});
      addUserInLocalStorage({});
    }
  };

  const logout=()=>{
    localStorage.removeItem('user')
    setUser({})
  }

  return {
    user,
    setUser,
    emailPasswordSignup,
    emailPasswordLogin,
    logout
  };
};

export default useCustomAuth;
