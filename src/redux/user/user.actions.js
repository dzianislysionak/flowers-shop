import axios from "axios";

import UserActionTypes from "./user.types";

export const signUpStart = () => ({
  type: UserActionTypes.REGISTER_USER_START,
});

export const signUpSuccess = (userCredentials) => ({
  type: UserActionTypes.REGISTER_USER_SUCCESS,
  payload: userCredentials,
});

export const signUpFailure = (errorMessage) => ({
  type: UserActionTypes.REGISTER_USER_FAILURE,
  payload: errorMessage,
});

export const signUpStartAsync = (userCredentials) => {
  return (dispatch) => {
    dispatch(signUpStart());
    console.log("userCred", userCredentials);
    fetch("http://localhost:5000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: userCredentials.email,
        password: userCredentials.password,
      }),
    })
      .then((res) => res.json())
      .then((userData) => console.log("data", userData))
      .then((data) => dispatch(signUpSuccess(data)))
      .catch((errorMessage) => dispatch(signUpFailure(errorMessage)));

    // axios
    //   .post("/register", {
    //     email: "gena",
    //     password: "asd",
    //   })
    //   .then((res) => console.log(res));
    // console.log(email, password);
    //     .then(function (response))

    //     fetch("http://localhost:5000/shop")
    //       .then((res) => res.json())
    //       .then((collll) => collll.col[0].collections)
    //       // .then((a) => a
    //       .then((data) => dispatch(fetchCollSuccess(data)))
    //       .catch((errorMessage) => dispatch(fetchCollFailure(errorMessage)));
    //   };
  };
};
