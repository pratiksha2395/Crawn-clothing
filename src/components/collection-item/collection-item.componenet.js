import React from 'react'
import {AddItem} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
import './collection-item.styles.scss'
import CustomButton from '../custom-button/customButton.componenet'
const CollectionItem = ({item, addItem})=>{
    const { name, price, imageUrl} = item
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}>

            </div>
            <CustomButton onClick={()=> addItem(item)}>Add To Cart</CustomButton>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch=>{
    return (
        {addItem : item=> dispatch(AddItem(item)) }
    )
}
export default connect(null, mapDispatchToProps)(CollectionItem);