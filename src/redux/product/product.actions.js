import ProduktActionTypes from "./produkt.types";
import axios from "axios";

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

export const fetchCollStartAsync = () => async (dispatch) => {
  // return async (dispatch) => {
  dispatch(fetchCollStart());

  try {
    const response = await axios.get("http://localhost:5000/shop");
    // console.log("res", response);
    const res = await response.data.col[0].collections;
    dispatch(fetchCollSuccess(res));
  } catch (errorMessage) {
    dispatch(fetchCollFailure(errorMessage));
  }
  // fetch("http://localhost:5000/shop")
  // .then((res) => res.json())
  // .then((collll) => collll.col[0].collections)
  // // .then((a) => a
  // .then((data) => dispatch(fetchCollSuccess(data)))
  // .catch((errorMessage) => dispatch(fetchCollFailure(errorMessage)));
};
// };
