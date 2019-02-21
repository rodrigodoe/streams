import { AUTH_USER, AUTH_ERROR } from "./types";
import axios from "axios";

export const signup = (formProps, callback) => async dispatch => {
  try {
    const response = await axios.post("/auth/register", formProps);
    dispatch({ type: AUTH_USER, payload: response.data._id });
    callback();
  } catch (e) {
    dispatch({ type: AUTH_ERROR, payload: e.response.data.err });
  }
};

export const checkLogin = () => async dispatch => {
  const response = await axios.get("/auth/me");
  dispatch({ type: AUTH_USER, payload: response.data._id });
};
