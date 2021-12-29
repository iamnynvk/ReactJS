import { applyMiddleware, compose, createStore } from "redux";
// import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import thunk from "redux-thunk";
import apiReducer from "./apiReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  apiReducer,
  composeEnhancers(applyMiddleware(logger,thunk)),
);

export default store;
//
