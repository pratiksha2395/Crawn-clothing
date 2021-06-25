import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from  '../custom-button/customButton.componenet'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.componenets'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {createStructuredSelector} from 'reselect' 
import  {withRouter} from 'react-router-dom'
import { CartToggleHidden } from '../../redux/cart/cart.actions'

const CartDropdown =({items, history, dispatch})=>{
    
    return (
        <div className="cart-dropdown" >
            <div className="cart-items">
                {   
                    items.length ? 
                    items.map(item=> <CartItem key ={item.id} item={item}/>) :
                    <span className="empty-message"> Your cart is empty</span>
                }
            </div>
            <CustomButton onClick ={() => { 
                dispatch(CartToggleHidden());
                history.push('/checkout');}
                }>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({
    items: selectCartItems,
    
})

export default withRouter(connect(mapStateToProps)(CartDropdown));