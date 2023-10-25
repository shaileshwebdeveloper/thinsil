import * as types from "./actionTypes";

const initialState = {
  products: [],
  isLoading: false,
  isError: false,
  cart: [],
};

export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCT_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.GET_PRODUCT_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        products: payload,
        isError: false,
      };

    case types.GET_PRODUCT_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
        products: [],
      };

    case types.GET_CART_PRODUCTS:
      return {
        ...oldState,
        cart: payload,
      };

    case types.ADD_PRODUCT_CART:
      return {
        ...oldState,
        cart: [...oldState.cart, payload],
      };

    default:
      return oldState;
  }
};
