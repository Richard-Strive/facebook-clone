import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "../reducers/user";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: {
    userID: "",
  },
};

const bigReducer = combineReducers({ user: userReducer });

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
