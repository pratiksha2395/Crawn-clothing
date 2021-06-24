import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.componenet'
import Header from './components/header/header.componenet';
import SignInAndSignUp from './pages/signin-signup/signin-signup'
import {auth, createUserProfileDocument} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import  {setCurrentUser}  from './redux/user/user.actions'
// import "firebase/auth";

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    console.log(this.props)
    
    console.log(setCurrentUser)
    this.unsubscribeFromAuth=  auth.onAuthStateChanged(async userAuth =>{
      // this.setState ({currentuser : user})
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot =>{
          this.props.setCurrentUser ({
              id:snapshot.id,
              ...snapshot.data()
          });
          
        });
        
      }
      this.props.setCurrentUser(userAuth);
    });
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  render(){
    return (
    <div>
    <Header  /> 
    <Switch>
      <Route exact path="/" component={HomePage}/> 
      <Route path="/shop" component={ShopPage}/>
      <Route exact path="/signin"  render = {()=> this.props.currentuser ? <Redirect to="/" /> : <SignInAndSignUp/>} />
    </Switch>
    </div>
  );
  }
  
}

const mapStateToProps = state =>({
  currentuser:state.user.currentuser
})

const mapDispatchToProps = dispatch =>{
  console.log(dispatch)
  return ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})};

export default connect(mapStateToProps, mapDispatchToProps)(App);
