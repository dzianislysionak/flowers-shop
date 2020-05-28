import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./name-page.styles.scss";
import { selectItem } from "../../redux/shop/shop.selectors";

const NamePage = ({ title }) => (
  <div className="name-page">
    <h1>{title}</h1>
  </div>
);

const mapStateToProps = createStructuredSelector({
  title: selectItem,
});

export default connect(mapStateToProps)(NamePage);
