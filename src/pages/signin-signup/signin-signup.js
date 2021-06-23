import React from 'react'
import SignIn from '../../components/signIn/SignIn.componenets'
import SignUp from '../../components/signUp/signup.componenet'
import './signin-signup.scss'
const SignInAndSignUp =()=>{
    return (
        <div className="sign-in-and-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUp