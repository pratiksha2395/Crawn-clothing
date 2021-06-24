import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from  '../custom-button/customButton.componenet'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.componenets'
const CartDropdown =({items})=>{
    
    return (
        <div className="cart-dropdown" >
            <div className="cart-items">
                {
                    items.map(item=> <CartItem key ={item.id} item={item}/>)
                }
            </div>
            <CustomButton>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.cart.cartItems
})
export default connect(mapStateToProps)(CartDropdown);