import React from "react";
import { connect } from "react-redux";

import { ReactComponent as Bin } from "../../assets/bin.svg";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
import "./basket.styles.scss";

const Basket = ({ toggleCartHidden }) => (
  <div className="basket" onClick={toggleCartHidden}>
    <div className="bin">
      <Bin />
    </div>
    <div className="product-and-cost">
      <span>0 товаров</span>
      <span>на 0 руб.</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(null, mapDispatchToProps)(Basket);
