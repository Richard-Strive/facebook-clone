import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import userReducer from "../reducers/user";
import selUserReducer from "../reducers/selUser";
import isSelectedUserReducer from "../reducers/isSelectedUser";
import setConnectedUserReducer from "../reducers/setConnectedUser";
import thunk from "redux-thunk";

const composedEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  user: {
    user_obj: "",
  },
  selUser: {
    user_obj: "",
  },
  connectedUser: [],
  isSelectedUser: false,
};

const bigReducer = combineReducers({
  user: userReducer,
  selUser: selUserReducer,
  isSelectedUser: isSelectedUserReducer,
  connectedUser: setConnectedUserReducer,
});

export default function configureStore() {
  return createStore(
    bigReducer,
    initialState,
    composedEnhancer(applyMiddleware(thunk))
  );
}
