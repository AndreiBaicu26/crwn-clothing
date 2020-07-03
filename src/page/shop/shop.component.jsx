import  React  from 'react';

import CollectionPreview from '../../components/preview-components/preview-collection.component'

import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

const ShopPage = ({match})=>
   (
        <div className = 'shop-Page'>
           <Route exact path = {`${match.path}`} component= {CollectionsOverview}></Route> 
           <Route exact path = {`${match.path}/:collectionId`} component= {CollectionPage}></Route> 
        </div>
)


export default ShopPage;