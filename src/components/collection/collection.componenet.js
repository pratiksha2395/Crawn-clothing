import React from 'react'
import {selectIdfromCollection} from '../../redux/shop/shop.selectors'
import {connect} from 'react-redux'
import CollectionItem from '../collection-item/collection-item.componenet'
import './collection.styles.scss'


const CollectionPage =({collection})=>{
    const {title, items}= collection
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
              {
                  items.map(item => 
                      <CollectionItem key={item.id} item={item}/>
                  )
              }
            </div>
        </div>
    );
};


const mapStateToProps =(state, ownProps) =>(
    {
        collection : selectIdfromCollection(ownProps.match.params.collectionId)(state)
    }
)
export default connect(mapStateToProps)(CollectionPage);