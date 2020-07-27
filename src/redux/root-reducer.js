import { combineReducers } from "redux";

import shopReducer from "./shop/shop.reducer";
import cartReducer from "./cart/cart.reducer";
import produktReducer from "./product/product.reducer";

export default combineReducers({
  shop: shopReducer,
  cart: cartReducer,
  produkt: produktReducer,
});
