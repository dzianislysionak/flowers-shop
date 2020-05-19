import React from "react";

import { ReactComponent as Bin } from "../../assets/bin.svg";

import "./basket.styles.scss";

const Basket = () => (
  <div className="basket">
    <div className="bin">
      <Bin />
    </div>
    <div className="product-and-cost">
      <span>0 товаров</span>
      <span>на 0 руб.</span>
    </div>
  </div>
);

export default Basket;
