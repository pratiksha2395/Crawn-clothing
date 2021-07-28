import React from 'react'
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.componenet'
import Header from './components/header/header.componenet';
import SignInAndSignUp from './pages/signin-signup/signin-signup'
import {auth, createUserProfileDocument, addCollectionAndDocuments} from './firebase/firebase.utils'
import {connect} from 'react-redux'
import {selectCollectionForPreview} from './redux/shop/shop.selectors'
import  {setCurrentUser}  from './redux/user/user.actions'
import {selectCurrentUser} from './redux/user/user.selectors'
import {createStructuredSelector} from 'reselect'
import Checkout from './components/checkout/checkout.componenet'


// import "firebase/auth";

class App extends React.Component {
  
  unsubscribeFromAuth = null;

  componentDidMount(){
    
    const {collectionsArray, setCurrentUser} = this.props
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth =>{
      // this.setState ({currentuser : user})
      console.log(userAuth)
      if(userAuth){
        const userRef= await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapshot =>{
          this.props.setCurrentUser ({
              id:snapshot.id,
              ...snapshot.data()
          });
          
        });
        
      }
      setCurrentUser(userAuth);
      //use to add shop data programatically to our firebase
      //addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items}) ))
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
      <Route exact path="/checkout" component={Checkout}/>
    </Switch>
    </div>
  );
  }
  
}

const mapStateToProps = createStructuredSelector({
  currentuser:selectCurrentUser,
  //collectionsArray:selectCollectionForPreview,
  
})

const mapDispatchToProps = dispatch =>{

  return ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})};

export default connect(mapStateToProps, mapDispatchToProps)(App);
