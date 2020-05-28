import React from "react";
import { connect } from "react-redux";
import { setCollection } from "../../redux/shop/shop.actions";

import "./category.styles.scss";

const Category = ({ categoryUrl, title, item, setCollection }) => (
  <div
    className="category"
    style={{
      backgroundImage: `url(${categoryUrl}) `,
    }}
    onClick={() => setCollection(item)}
  >
    <div className="category-title">{title}</div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  setCollection: (itemm) => dispatch(setCollection(itemm)),
});

export default connect(null, mapDispatchToProps)(Category);
