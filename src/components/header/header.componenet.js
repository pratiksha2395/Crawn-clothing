import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import './header.styles.scss'
import {auth} from '../../firebase/firebase.utils'
import {connect} from 'react-redux'

const Header =({currentuser})=>{
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
            </div>
        </div>
    )
}

const mapStateToProps = state =>{
    console.log(state.user.currentuser)
    return ({
    currentuser : state.user.currentuser
})
}


export default connect(mapStateToProps)(Header);