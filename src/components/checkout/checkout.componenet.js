import React from 'react'
import {connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectcartPriceTotal} from '../../redux/cart/cart.selectors'
import './checkout.styles.scss'
import CheckoutItem from  '../checkout-item/checkout-item.componenet'
const Checkout =({cartItems, total})=>{
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
                {
                cartItems.map ((item)=>(
                    <CheckoutItem key={item.id} cartItem={item}></CheckoutItem>))
                }
            <div className="total">total:${total}</div>
        </div>
        
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems,
    total:selectcartPriceTotal
})
export default connect(mapStateToProps)(Checkout);