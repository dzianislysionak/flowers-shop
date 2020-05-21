import React from "react";

import { Link } from "react-router-dom";

import "./top.styles.scss";

const Top = () => (
  <div className="top">
    <Link to="/about" className="top-element">
      О нас
    </Link>
    <Link to="/contacts" className="top-element">
      Контакты
    </Link>
    <Link to="/delivery" className="top-element">
      Доставка
    </Link>
    <Link to="/signin" className="top-element">
      Войти
    </Link>
  </div>
);

export default Top;
