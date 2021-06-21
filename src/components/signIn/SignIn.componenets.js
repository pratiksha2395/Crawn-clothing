import React from 'react'
import FormInput from  '../form-input/form-input.componenet'
import './signIn.scss'
import CustomButton from '../custom-button/customButton.componenet'
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

                <form action={this.handleSubmit}>
                    <FormInput type="text" name="email" value={this.state.email}  label="email" handleChange={this.handleChange}/>
                    
                    <FormInput type="password" label="password" name="password" value={this.state.password} handleChange={this.handleChange} />
               
                    <CustomButton type="submit" value="Sign In">Sign In</CustomButton>
                </form>
            </div>
        )
    }
}


export default SignIn;