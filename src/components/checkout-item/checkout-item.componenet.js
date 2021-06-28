import React from 'react'
import './checkout-item.styles.scss'
import {RemoveItemFromCart} from '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
import {AddItem, decreseItemQuantity} from '../../redux/cart/cart.actions'
import { useParams } from 'react-router-dom'
const CheckOutItem =({cartItem , removeItem, AddItem, Decrease})=>{
    
    const prams= useParams()
    
    const { name,  imageUrl, price, quantity} = cartItem
        return (<div className="checkout-item">
           <div className="image-container">
               <img src={imageUrl} alt="item" />
           </div>
           <span className="name">{name}</span>
           <span className="quantity">
               <div className="arrow" onClick={() => Decrease(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={()=>AddItem(cartItem)}>&#10095;</div>
            </span>
           <span className="price">{price}</span>
           <div className="remove-button" onClick={()=> removeItem(cartItem)}>&#10005;</div>
        </div>
    )}

const mapDispatchToProps = dispatch =>{
    return ({removeItem : item => dispatch(RemoveItemFromCart(item)),
    AddItem : item => dispatch(AddItem(item)),
    Decrease: item=> dispatch(decreseItemQuantity(item)),
    }
)}

export default connect(null,mapDispatchToProps)(CheckOutItem);