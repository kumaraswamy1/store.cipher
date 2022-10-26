import { createContext, useContext, useReducer } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { baseURL } from "../Services/API/api.instance";
import {
  setupAuthHeaderForServiceCalls,
  setupAuthExceptionHandler
} from "../Services/API/api.setupHandlers";

import { loginReducer } from "../Reducer";
import axios from "axios";
export const AuthContext = createContext();

export const useLogin = () => useContext(AuthContext);

export function AuthProvider({ children }) {
  const { state: locationState } = useLocation();
  const navigate = useNavigate();
  const from = locationState?.from?.pathname || "/";

  const intialUserArgs = {
    username: "",
    password: "",
    name: "",
    email: "",
    token: JSON.parse(localStorage.getItem("login")) || false
  };

  const [state, dispatch] = useReducer(loginReducer, intialUserArgs);

  if (state.token) {
    setupAuthHeaderForServiceCalls(state.token);
  }

  const loginWithCredentials = async (username, password) => {
    try {
      const { data } = await axios.post(`${baseURL}/user/login`, {
        username,
        password
      });

      dispatch({ type: "SET_TOKEN", payload: data.token });
      localStorage?.setItem("login", JSON.stringify(data.token));
      navigate(from, { replace: true });
      dispatch({ type: "CLEAR_CREDENTIALS" });
      setupAuthExceptionHandler(logoutHandler, navigate);
      return data;
    } catch (error) {
      console.error(error.response);
      return error.response.data;
    }
  };

  function logoutHandler() {
    localStorage?.removeItem("login");
    dispatch({ type: "SET_TOKEN", payload: false });
  }

  const SignupUser = async (name, username, email, password) => {
    try {
      const { data } = await axios.post(`${baseURL}/user/signup`, {
        user: {
          name,
          username,
          email,
          password
        }
      });
      dispatch({ type: "CLEAR_CREDENTIALS" });
      navigate("/login");
      return data;
    } catch (error) {
      console.error(error.response);
      return error.response.data;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        loginWithCredentials,
        logoutHandler,
        SignupUser,
        state,
        dispatch
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
