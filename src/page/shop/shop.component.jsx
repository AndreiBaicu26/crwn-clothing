import React, { useEffect, lazy, Suspense } from "react";

import { Route } from "react-router-dom";
import { connect } from "react-redux";
import { fetchCollectionsStart } from "../../redux/shop/shop.actions";
import Spinner from "../../components/spinner/spinner.component";


import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container'
import CollectionsContainer  from '../collection/collection.container'

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <div className="shop-Page">
     
            <Route
            exact
            path={`${match.path}`}
            component={CollectionsOverviewContainer}
            ></Route>

            <Route
            exact
            path={`${match.path}/:collectionId`}
            component={CollectionsContainer}
            ></Route>
        
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
