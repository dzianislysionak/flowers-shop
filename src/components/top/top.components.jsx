import React from "react";
import { connect } from "react-redux";

import { Link } from "react-router-dom";
import { setCollection } from "../../redux/shop/shop.actions";

import "./top.styles.scss";

const Top = ({ setCollection }) => (
  <div className="top">
    <Link
      to="/about"
      className="green top-element"
      onClick={() => setCollection({ title: "О нас" })}
    >
      О нас
    </Link>
    <Link
      to="/contacts"
      className="top-element"
      onClick={() => setCollection({ title: "Контакты" })}
    >
      Контакты
    </Link>
    <Link
      to="/delivery"
      className="top-element"
      onClick={() => setCollection({ title: "Доставка" })}
    >
      Доставка
    </Link>
    <Link to="/signin" className="top-element">
      Войти
    </Link>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setCollection: (item) => dispatch(setCollection(item)),
});

export default connect(null, mapDispatchToProps)(Top);
