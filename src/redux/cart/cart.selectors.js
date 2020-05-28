import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

export const selectCartHidden = createSelector(
  [cartSelector],
  (cart) => cart.hidden
);
