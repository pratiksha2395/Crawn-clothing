import React from 'react'
import './custom-button.styles.scss'
const CustomButton=({children, isGooglesignIn, inverted, ...otherprops })=>{
    return (
        <button   className={`${inverted ? 'inverted' : ''} ${isGooglesignIn ? 'google-sign-in' : ''} custom-button`} {...otherprops}>
            {children}
        </button>
    )
}

export default CustomButton;