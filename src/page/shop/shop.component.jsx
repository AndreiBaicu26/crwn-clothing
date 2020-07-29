import  React  from 'react';

import CollectionPreview from '../../components/preview-components/preview-collection.component'

import { Route } from 'react-router-dom'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionFetching, selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import { fetchCollectionsStartAsync}  from '../../redux/shop/shop.actions';


const CollectionOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component{

  

   componentDidMount(){
     const { fetchCollectionsStartAsync } = this.props;
     fetchCollectionsStartAsync();
   }

   render(){
      const { match, isCollectionLoaded } = this.props;
    
      return(
         <div className = 'shop-Page'>
           <Route exact path = {`${match.path}`} 
            render = {(props) => 
            (<CollectionOverviewWithSpinner isLoading = {isCollectionLoaded}{...props}/>)}>

            </Route> 

           <Route exact path = {`${match.path}/:collectionId`} 
            render = {(props) => 
               (<CollectionPageWithSpinner 
                isLoading = {!isCollectionLoaded}{...props}/>)}>

           </Route> 
        </div>
      )
   }
  
}


const mapStateToProps = createStructuredSelector(
   {
      isCollectionFetching: selectIsCollectionFetching,
      isCollectionLoaded: selectIsCollectionLoaded
   }
)

const mapDispatchToProps = dispatch => ({
   fetchCollectionsStartAsync: ()=>dispatch(fetchCollectionsStartAsync())
   })

export default connect(null, mapDispatchToProps)(ShopPage);