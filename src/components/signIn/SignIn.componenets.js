import React from 'react'
import FormInput from  '../form-input/form-input.componenet'
import './signIn.scss'
import CustomButton from '../custom-button/customButton.componenet'
import {signInWithGoogle} from '../../firebase/firebase.utils'

class SignIn extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email:'',
            password:''
        }
    }
    handleSubmit =(e)=>{
        e.preventDefault()
        this.state={email:'', password:''}
    }
    handleChange =(e)=>{
      const  {value, name} = e.target;
      this.setState({[name]:value})
    }
    render(){
        return(
            <div className="sign-in">
                <h2>Already have account</h2>
                <span>sign in with your email</span>

                <form >
                    <FormInput type="text" name="email" value={this.state.email}  label="email" handleChange={this.handleChange} required/>
                    
                    <FormInput type="password" label="password" name="password" value={this.state.password} handleChange={this.handleChange} required />
                    <div className="buttons">
                        <CustomButton type="submit" value="Sign In" onClick={this.handleSubmit} >Sign In</CustomButton>
                        <CustomButton onClick ={signInWithGoogle} isGooglesignIn>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}


export default SignIn;