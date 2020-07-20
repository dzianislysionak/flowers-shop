import ProduktActionTypes from "./produkt.types";

export const fetchCollStart = () => ({
  type: ProduktActionTypes.FETCH_COLL_START,
});

export const fetchCollSuccess = (collect) => ({
  type: ProduktActionTypes.FETCH_COLL_SUCCESS,
  payload: collect,
});

export const fetchCollFailure = (errorMessage) => ({
  type: ProduktActionTypes.FETCH_COLL_FAILURE,
  payload: errorMessage,
});

export const fetchCollStartAsync = () => {
  return (dispatch) => {
    dispatch(fetchCollStart());

    fetch("http://localhost:3000/shop")
      .then((res) => res.json())
      .then((collll) => collll.col[0].collections)
      // .then((a) => a
      .then((data) => dispatch(fetchCollSuccess(data)))
      .catch((errorMessage) => dispatch(fetchCollFailure(errorMessage)));
  };
};
