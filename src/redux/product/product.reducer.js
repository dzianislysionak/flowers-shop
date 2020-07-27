import ProduktActionTypes from "./produkt.types";

const INITIAL_STATE = {
  coll: null,
  isFaching: true,
  errorMessage: null,
};

const produktReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ProduktActionTypes.FETCH_COLL_START:
      return {
        ...state,
        isFaching: true,
      };
    case ProduktActionTypes.FETCH_COLL_SUCCESS:
      return {
        ...state,
        isFaching: false,
        coll: action.payload,
      };
    case ProduktActionTypes.FETCH_COLL_FAILURE:
      return {
        ...state,
        isFaching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default produktReducer;
