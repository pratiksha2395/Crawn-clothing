import React from 'react'
import './collections-overview.styles.scss'
import CollectionPreview from '../../components/preview-collection/preview-collection.componenet'
import {createStructuredSelector} from 'reselect'

import {selectCollectionForPreview} from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux'

const CollectionOverview =({collections})=>{
    return (
                collections.map((single) =>{
                    const {id, ...others} = single
                    return <CollectionPreview key ={id} {...others}/>
                })
    )
}

const mapStateToProps = createStructuredSelector(
    { collections: selectCollectionForPreview}
)

export default connect(mapStateToProps)(CollectionOverview)