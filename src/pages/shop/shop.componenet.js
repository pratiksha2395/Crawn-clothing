import React from 'react'
import SHOP_DATA from './shop.data'

import CollectionPreview from '../../components/preview-collection/preview-collection.componenet'

class ShopPage extends React.Component{
    constructor(props){
        super(props)
        this.state = {data : SHOP_DATA}
    }
    render(){
        return (<div className="shop-page">
            {
                this.state.data.map((single) =>{
                    const {id, ...others} = single
                    return <CollectionPreview key ={id} {...others}/>
                })
            }
        </div>)
    }
}

export default ShopPage;