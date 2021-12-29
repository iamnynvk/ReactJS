import { applyMiddleware, createStore, compose  } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import counterReducer from "./counterReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  counterReducer,
  composeEnhancers(applyMiddleware(logger)),
);

export default store;
