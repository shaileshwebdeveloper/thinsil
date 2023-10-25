import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as ProductReducer } from "./product/reducer";
import { reducer as AuthReducer } from "./auth/reducer";

const rootReducer = combineReducers({ ProductReducer, AuthReducer });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
