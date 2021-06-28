import React from 'react'
import StripeCheckout from 'react-stripe-checkout' 

const StripeButton =({price})=>{
    const priecForStripe = price * 100
    const publishableKey = 'pk_test_51J7EDSSHX8TTFispf6BVgBkIb1yCUP65ogndZmxngltSEwSCu5eAxOOoVtIXmFzyXCta57cLpFAYHPMJobVgohkS001b0OpRdO'

    const ontoken = token => {
        console.log(token)
        alert("payment successful")
    }
    return(
        <StripeCheckout
        label="Pay now"
        name="crawn Clothing"
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total price is $${price}`}
        amount={priecForStripe}
        panelLabel="pay now"
        token={ontoken}
        stripeKey={publishableKey}></StripeCheckout>
    )
}

export default StripeButton;