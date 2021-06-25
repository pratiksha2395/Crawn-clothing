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


const Header =({currentuser, hidden})=>{
    console.log(currentuser)
    return (
        <div className='header'>
            <Link className="logo-container" to="/">
               <Logo className="logo" /> 
            </Link>
            <div className="options">
                <Link to="/shop" className="option"> Shop</Link>
                 <Link to="/shop" className="option"> Contact</Link>
                 {
                    
                    currentuser ?
                    <div onClick={()=> auth.signOut()} className="option"> SignOut </div> :
                    <Link to="/signin" className="option">Sign In</Link>

                 }
                 <CartIcon />
            </div>
            {
                hidden ? null :  <CartDropdown />
            }
           
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentuser : selectCurrentUser,
    hidden: selectCartHidden
})



export default connect(mapStateToProps)(Header);