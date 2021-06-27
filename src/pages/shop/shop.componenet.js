import React from 'react'

import CollectionOverview from '../../components/collection-overview/collection-overview.componenet'
import {Route} from 'react-router-dom'
import CollectionPage from '../../components/collection/collection.componenet'

const  ShopPage = ({ match })=> {
    console.log(match)
        return (<div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionOverview} />
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>)
    
}


export default ShopPage;