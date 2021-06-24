import React from 'react'
import './cart-icon.styles.scss'
import CartToggleHidden from  '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag_new.svg'

const CartIcon =({CartToggleHidden})=>{
    return (
        <div className="cart-icon" onClick={CartToggleHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">0</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    CartToggleHidden: () => dispatch( CartToggleHidden())
})

export default connect(null, mapDispatchToProps)(CartIcon);

