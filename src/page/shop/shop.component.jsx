import  React  from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../../components/preview-components/preview-collection.component'

class ShopPage extends React.Component{
    constructor(props){
        super(props);

        this.state={
            collection: SHOP_DATA
        }
    }

    render(){
        const {collection} = this.state;
        return(
            <div className = 'shopPage'>
                {
                    collection.map(({id,...collectionProps}) =>{
                        return <CollectionPreview key = {id}{...collectionProps}/>
                    })
                }
            </div>
        )
    }
}

export default ShopPage;