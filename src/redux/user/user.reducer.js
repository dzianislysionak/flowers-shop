import UserActionTypes from "./user.types";

const INITIAL_STATE = {
  // email: null,
  // password: null,
  loadingUser: false,
  errorMessage: null,
  isSignIn: false,
  userCredentials: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.REGISTER_USER_START:
      return {
        ...state,
        loadingUser: true,
      };
    case UserActionTypes.REGISTER_USER_SUCCESS:
      return {
        ...state,
        loadingUser: false,
        isSignIn: true,
        userCredentials: action.payload,
        // email: action.payload.userCredentials.email,
        // password: action.payload.userCredentials.password,
      };
    case UserActionTypes.REGISTER_USER_FAILURE:
      return {
        ...state,
        loadingUser: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
