import axios from "axios";
import * as types from "./actionTypes";

export const userSignup = (payload) => (dispatch) => {
  dispatch({ type: types.USER_SIGNUP_REQUEST });
  return axios
    .post("http://localhost:3004/Signup", payload)
    .then((r) => {
      dispatch({ type: types.USER_SIGNUP_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.USER_SIGNUP_FAILURE }));
};

export const userLogin = (payload) => (dispatch) => {
  // console.log("payload", payload)

  dispatch({ type: types.USER_LOGIN_REQUEST });
  return axios
    .post("http://localhost:3004/Login", payload)
    .then((r) => {
      dispatch({ type: types.USER_LOGIN_SUCCESS, payload: r.data });
      alert("Signup Sucess");
    })
    .catch((e) => dispatch({ type: types.USER_LOGIN_FAILURE }));
};
