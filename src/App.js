import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.componenet'
import Header from './components/header/header.componenet';
import SignInAndSignUp from './pages/signin-signup/signin-signup'
function App() {
  return (
    <div>
    <Header />
    <Switch>
      <Route exact path="/" component={HomePage}/> 
      <Route path="/shop" component={ShopPage}/>
      <Route path="/signin" component={SignInAndSignUp}/>
    </Switch>
    </div>
  );
}

export default App;
