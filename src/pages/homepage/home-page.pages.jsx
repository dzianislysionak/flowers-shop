import React from "react";
import { createStructuredSelector } from "reselect";

import ShopItem from "../../components/shop-item/shop-item.components";
import { fetchCollStartAsync } from "../../redux/product/product.actions";
import {
  selectColl,
  selectIsFetching,
  selectCollect,
} from "../../redux/product/produkt.selectors";
import { connect } from "react-redux";

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchCollStartAsync } = this.props;
    fetchCollStartAsync();
  }

  render() {
    const { collect, loading } = this.props;
    // loading ? console.log("loading") : console.log(collect);

    if (loading) {
      console.log("loading ");
    } else {
      const a = typeof collect;
      console.log("a=", a, "b=", collect.coll);
    }

    return <ShopItem />;
  }
}

const mapStateToProps = createStructuredSelector({
  collect: selectColl,
  loading: selectIsFetching,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCollStartAsync: () => dispatch(fetchCollStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
