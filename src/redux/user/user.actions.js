import axios from "axios";

import UserActionTypes from "./user.types";

export const signUpStart = () => ({
  type: UserActionTypes.REGISTER_USER_START,
});

export const signUpSuccess = (userCredentials) => ({
  type: UserActionTypes.REGISTER_USER_SUCCESS,
  payload: { userCredentials },
});

export const signUpFailure = (errorMessage) => ({
  type: UserActionTypes.REGISTER_USER_FAILURE,
  payload: errorMessage,
});

export const signUpStartAsync = (userCredentials) => async (dispatch) => {
  // return async (dispatch) => {
  dispatch(signUpStart());
  console.log("userCred", userCredentials);
  // fetch("http://localhost:5000/register", {
  //   method: "post",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({
  //     email: userCredentials.email,
  //     password: userCredentials.password,
  //   }),
  // })
  //   .then((res) => res.json())
  //   // .then((userData) => console.log("data", userData))
  //   .then((userCredentials) => dispatch(signUpSuccess(userCredentials)))
  //   .catch((errorMessage) => dispatch(signUpFailure(errorMessage)));

  try {
    const response = await axios.post("http://localhost:5000/register", {
      email: userCredentials.email,
      password: userCredentials.password,
      name: userCredentials.name,
    });
    console.log("response", response);
    const res = await response.data;
    dispatch(signUpSuccess(res));
  } catch (errorMessage) {
    dispatch(signUpFailure(errorMessage));
  }
};
