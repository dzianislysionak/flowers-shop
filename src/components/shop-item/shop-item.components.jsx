import React from "react";

import "./shop-item.styles.scss";

const ShopItem = () => (
  <div className="shop-item">
    <div
      className="image"
      style={{
        backgroundImage:
          "url(https://www.florastatic.net/floraexpress.ru/img/blog/566/26-01-16-floraexpress-1.jpg)",
      }}
    />
    <h2>цветыыы</h2>
    <div className="price-and-order">
      <span className="price">60 рублик</span>
      <span className="order">заказать</span>
    </div>
  </div>
);

export default ShopItem;
