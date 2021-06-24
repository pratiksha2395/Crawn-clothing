import React from 'react'
import './cart-dropdown.styles.scss'
import CustomButton from  '../custom-button/customButton.componenet'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.componenets'
import {selectCartItems} from '../../redux/cart/cart.selectors'

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
    items: selectCartItems(state)
})
export default connect(mapStateToProps)(CartDropdown);