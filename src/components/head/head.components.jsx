import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { Link } from "react-router-dom";

import { ReactComponent as Flower } from "../../assets/flower.svg";
import Basket from "../basket/basket.component";
import CartDropDown from "../cart-drop-down/cart-drop-down";
import { selectCartHidden } from "../../redux/cart/cart.selectors";

import "./head.styles.scss";

const Head = ({ hidden }) => (
  <div className="head-with-drop">
    <div className="head">
      <div className="logo">
        <Link to="/">
          <Flower />
        </Link>
        <div className="info">
          <h1 className="sub-info">Flower-Shop</h1>
          <h4 className="sub-info">магазин цветов и плдарков</h4>
        </div>
      </div>
      <div className="our-phone">
        <h4>Свяжитесь с нами</h4>
        <h2>2-22-22-22</h2>
        <h2>3-33-33-33</h2>
      </div>
      <div className="work-time">
        <h4>время работы</h4>
        <h1>Пн-Вс 9:00-21:00</h1>
      </div>
      <div className="basket">
        <Basket />
      </div>
    </div>
    {hidden ? null : <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Head);
