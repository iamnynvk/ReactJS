import { DECREAMENT, INCREAMENT, RESET } from "./counterType";

const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case INCREAMENT:
      return {
        counter: state.counter + 1,
      };
    case DECREAMENT:
      return {
        counter: state.counter - 1,
      };
    case RESET:
      return {
        counter: 0,
      };
    default:
      return state;
  }
};

export default counterReducer;
