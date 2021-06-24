import React from 'react'
import './cart-icon.styles.scss'
import {CartToggleHidden} from  '../../redux/cart/cart.actions'
import {connect} from 'react-redux'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import {selectCartCount} from '../../redux/cart/cart.selectors'

const CartIcon =({CartToggleHidden, totalQuanatity})=>{
    return (
        <div className="cart-icon" onClick={CartToggleHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{totalQuanatity}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    CartToggleHidden: () => dispatch( CartToggleHidden())
})

const mapStateToProps = state => ({
    totalQuanatity: selectCartCount(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);

