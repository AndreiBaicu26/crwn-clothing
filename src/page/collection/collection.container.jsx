import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionLoaded } from '../../redux/shop/shop.selectors';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { compose } from 'redux';
import CollectionPage from './collection.component';

const mapStateToProps = createStructuredSelector(
    {
       isLoading: (state)=> !selectIsCollectionLoaded(state)
    }
 )


 const CollectionsContainer = compose(
     connect(mapStateToProps),
     WithSpinner,
     
 )(CollectionPage);

 export default CollectionsContainer;