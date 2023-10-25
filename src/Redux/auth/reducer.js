import * as types from "./actionTypes";

const initialState = {
  signup: JSON.parse(localStorage.getItem("users")) || [],
  login: {},
  isAuthLoading: false,
  isAuthError: false,
  isAuth: false,
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.USER_LOGIN_REQUEST:
      return {
        ...oldState,
        isAuthLoading: true,
      };

    case types.USER_LOGIN_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        login: payload,
        isAuth: true,
      };

    case types.USER_LOGIN_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: true,
        isAuth: false,
      };

    case types.USER_SIGNUP_REQUEST:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: true,
      };

    case types.USER_SIGNUP_SUCCESS:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: true,
        signup: [...oldState.signup, payload],
      };

    case types.USER_SIGNUP_FAILURE:
      return {
        ...oldState,
        isAuthLoading: false,
        isAuthError: true,
      };

    default:
      return oldState;
  }
};
