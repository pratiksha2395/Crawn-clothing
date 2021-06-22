import React from 'react'
import './custom-button.styles.scss'
const CustomButton=({children, isGooglesignIn, ...otherprops})=>{
    return (
        <button  {...otherprops} className={`${isGooglesignIn ? 'google-sign-in' : ''} custom-button`}>
            {children}
        </button>
    )
}

export default CustomButton;