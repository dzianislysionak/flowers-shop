import { createSelector } from "reselect";

const selectProdukt = (state) => state.produkt;

export const selectColl = createSelector(
  [selectProdukt],
  (product) => product.coll
);

export const selectCollect = createSelector(
  [selectColl],
  (selectColl) => selectColl.colll
);

export const selectIsFetching = createSelector(
  [selectProdukt],
  (product) => product.isFaching
);
