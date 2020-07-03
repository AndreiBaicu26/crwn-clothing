import  React  from 'react';

import CollectionPreview from '../../components/preview-components/preview-collection.component'
import { connect } from 'react-redux';
import {createStructuredSelector} from 'reselect'
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({collections})=>
   (
        <div className = 'collections-overview'>
            {
                collections.map(({id,...collectionProps}) =>{
                    return <CollectionPreview key = {id}{...collectionProps}/>
                })
            }
        </div>
)

const mapStateToProps = createStructuredSelector(
    {
        collections: selectCollectionsForPreview
    }
)

export default connect(mapStateToProps)(CollectionsOverview);