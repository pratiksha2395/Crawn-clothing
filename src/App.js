import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.componenet'
import Header from './components/header/header.componenet';
import SignInAndSignUp from './pages/signin-signup/signin-signup'
import {auth} from './firebase/firebase.utils'
// import "firebase/auth";

class App extends React.Component {
  constructor(){
    super()
    this.state={currentuser:null}
  }
  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(user =>{
      this.setState ({currentuser : user})
      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth()
  }
  render(){
    return (
    <div>
    <Header currentuser={this.state.currentuser} />
    <Switch>
      <Route exact path="/" component={HomePage}/> 
      <Route path="/shop" component={ShopPage}/>
      <Route path="/signin" component={SignInAndSignUp}/>
    </Switch>
    </div>
  );
  }
  
}

export default App;
