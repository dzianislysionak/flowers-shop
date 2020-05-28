import { ShopActionTypes } from "./shop.types";

export const setCollection = (itemm) => ({
  type: ShopActionTypes.SET_COLLECTION,
  payload: itemm,
});
