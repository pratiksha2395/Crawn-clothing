import React from 'react'
import {connect } from 'react-redux'
import {createStructuredSelector} from 'reselect'
import {selectCartItems, selectcartPriceTotal} from '../../redux/cart/cart.selectors'
import './checkout.styles.scss'
import CheckoutItem from  '../checkout-item/checkout-item.componenet'
import StripeButton from '../stripe-button/stripe-button.componenet' 
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
            <StripeButton price={total}></StripeButton>
            <div className="test-warning">
                *Please  use the following card to test your application*
                <br />
                Account no. 4242-4242-4242-4242 <br/>
                Expiry date: 01/22 <br/>
                CV:123
            </div>
            
        </div>
        
    )
}

const mapStateToProps = createStructuredSelector ({
    cartItems : selectCartItems,
    total:selectcartPriceTotal
})
export default connect(mapStateToProps)(Checkout);