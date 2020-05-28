import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Category from "../category/category.components";
// import { setCollection } from "../../redux/shop/shop.actions";
import { selectCollections } from "../../redux/shop/shop.selectors";

import "./collections.styles.scss";

const Collections = ({ collections }) => (
  <div className="collections">
    {collections.map((item) => (
      <Category
        key={item.id}
        title={item.title}
        categoryUrl={item.categoryUrl}
        item={item}
      />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(Collections);
