import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.componenets'
import CartDropdown from '../cart-dropdown/cart-dropdown.componenet'
import {selectCartHidden} from '../../redux/cart/cart.selectors'
import {selectCurrentUser} from '../../redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import {HeaderContainer, OptionsContainer, LogoContainer, OptionLink, OptionDiv} from './header.styled'

const Header =({currentuser, hidden})=>{
    
    return (
        <HeaderContainer>
            <LogoContainer to="/">
               <Logo className="logo" /> 
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop" > Shop</OptionLink>
                 <OptionLink to="/shop" > Contact</OptionLink>
                 {
                    
                    currentuser ?
                    <OptionDiv onClick={()=> auth.signOut()} > SignOut </OptionDiv> :
                    <OptionLink to="/signin" >Sign In</OptionLink>

                 }
                 <CartIcon />
            </OptionsContainer>
            {
                hidden ? null :  <CartDropdown />
            }
           
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentuser : selectCurrentUser,
    hidden: selectCartHidden
})



export default connect(mapStateToProps)(Header);