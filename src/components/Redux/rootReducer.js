import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import icecreamReducer from "./Icecream/icecreamReducer";

const rootReducer = combineReducers({
    cakeReducer,
    icecreamReducer
});

export default  rootReducer;