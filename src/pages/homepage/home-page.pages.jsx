import React from "react";
import { createStructuredSelector } from "reselect";

import ShopItem from "../../components/shop-item/shop-item.components";
import Spinner from "../../components/spinner/spinner.components";
import { fetchCollStartAsync } from "../../redux/product/product.actions";
import {
  selectColl,
  selectIsFetching,
} from "../../redux/product/produkt.selectors";
import { connect } from "react-redux";
import "./home-page.styles.scss";

class HomePage extends React.Component {
  componentDidMount() {
    const { fetchCollStartAsync } = this.props;
    fetchCollStartAsync();
  }

  render() {
    const { collect, loading } = this.props;

    return loading ? (
      <Spinner />
    ) : (
      <div className="home-page">
        {collect.map((shopItem) => (
          <ShopItem
            categoryUrl={shopItem.categoryUrl}
            title={shopItem.title}
            key={shopItem._id}
          />
        ))}
      </div>
    );
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
