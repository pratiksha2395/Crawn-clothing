import React from 'react'
import FormInput from '../form-input/form-input.componenet'
import CustomButton from '../custom-button/customButton.componenet'
import {auth, createUserProfileDocument} from  '../../firebase/firebase.utils'
import './sign-up.styles.scss'
class SignUp extends React.Component{
    constructor(){
        super()
        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }
    handleSubmit = async (e)=>{
        e.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state
        if(password !== confirmPassword){
            alert("password don't matched")
        }
        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
            })
        } catch (error) {
           console.log("Error in sign up", error.message) 
        }
    }

    handleChange =(e)=>{
        const {name, value}= e.target
        this.setState({[name]:value})
    }
    render(){
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div className="sign-up">
                <h2 className="title"></h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type="text" 
                    name="displayName"
                    value={displayName}
                    onChange={this.handleChange} 
                    label="display Nmae" requird />
                    <FormInput type="email" 
                    name="email"
                    value={email}
                    onChange={this.handleChange} 
                    label="email" requird />
                    <FormInput type="password" 
                    name="password"
                    value={password}
                    onChange={this.handleChange} 
                    label="password" requird />
                    <FormInput type="password" 
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={this.handleChange} 
                    label="confirmPassword " requird />
                    <CustomButton type="submit" > Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignUp;