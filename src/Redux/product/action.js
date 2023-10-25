import axios from "axios";
import * as types from "./actionTypes";

export const getProducts = (params) => (dispatch) => {
  dispatch({ type: types.GET_PRODUCT_REQUEST });
  return axios
    .get("http://localhost:3004/Products", params)
    .then((r) => {
      //   console.log("getproduct", r.data);
      dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: r.data });
    })
    .catch((e) => dispatch({ type: types.GET_PRODUCT_FAILURE }));
};

export const getCartProducts = () => (dispatch) => {
  return axios
    .get("http://localhost:3004/Cart")
    .then((r) => {
      dispatch({ type: types.GET_CART_PRODUCTS, payload: r.data });
    })
    .catch((e) => console.log(e));
};

export const handleAddCart = (payload) => (dispatch) => {
  //   console.log("handleCartpayload", payload);

  return axios
    .post("http://localhost:3004/Cart", payload)
    .then((r) => {
      dispatch({ type: types.ADD_PRODUCT_CART, payload: r.data });
    })
    .catch((e) => console.log(e));
};

export const handleRemoveCart = (payload) => (dispatch) => {
  return axios.delete(`http://localhost:3004/Cart/${payload}`);
};
