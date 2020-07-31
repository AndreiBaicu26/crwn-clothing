import  React, {useEffect}  from 'react';


import { Route } from 'react-router-dom'
import { connect } from 'react-redux';
import { fetchCollectionsStart}  from '../../redux/shop/shop.actions';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsContainer from '../collection/collection.container';



class ShopPage extends React.Component{


   componentDidMount(){
     const { fetchCollectionsStart } = this.props;
     fetchCollectionsStart();
   }

   render(){
      const { match } = this.props;
    
      return(
         <div className = 'shop-Page'>
           <Route exact path = {`${match.path}`} 
           component={CollectionsOverviewContainer}>
            </Route> 

           <Route exact path = {`${match.path}/:collectionId`} 
            component={CollectionsContainer}>
           </Route> 
        </div>
      )
   }
  
}




const mapDispatchToProps = dispatch => ({
   fetchCollectionsStart: ()=>dispatch(fetchCollectionsStart())
   })

export default connect(null, mapDispatchToProps)(ShopPage);