import React from "react";

import "./category.styles.scss";

const Category = ({ categoryUrl, title }) => (
  <div
    className="category"
    style={{
      backgroundImage: `url(${categoryUrl}) `,
    }}
  >
    <div className="category-title">{title}</div>
  </div>
);

export default Category;
