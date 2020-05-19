import React from "react";

import Category from "../category/category.components";
import SHOP_DATA from "../../data/shop.data";

import "./collections.styles.scss";

const Collections = () => (
  <div className="collections">
    {SHOP_DATA.map((item) => (
      <Category
        key={item.id}
        title={item.title}
        categoryUrl={item.categoryUrl}
      />
    ))}
  </div>
);

export default Collections;
