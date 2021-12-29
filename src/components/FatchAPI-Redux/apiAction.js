import axios, { Axios } from "axios";
import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESFULL,
} from "./apiType";

export const user_Request = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const user_successfull = user => {
  return {
    type: FETCH_USER_SUCCESFULL,
    payload: user,
  };
};

export const user_failure = err => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err,
  };
};

export const fetchUSER = () => {
  return (dispatch) => {
    dispatch(user_Request)
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(response => {
      const user = response.data
      dispatch(user_successfull(user))
    })
    .catch(err => {
      const errorMsg = err.message
      dispatch(user_failure(errorMsg));
    })
  };
};


// dispatch(user_Request());
// Axios.get("https://jsonplaceholder.typicode.com/users")
// .then((response) => {
//   const user = response.data.map((user) => user.id);
//   dispatch(user_successfull(user));
// })
// .catch((err) => {
//   dispatch(user_failure(err.message));
// });