import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Route, Switch} from 'react-router-dom'
import ShopPage from './pages/shop/shop.componenet'

function App() {
  return (

    <Switch>
      <Route exact path="/" component={HomePage}/> 
      <Route path="/shop" component={ShopPage}/>
    </Switch>
    
  );
}

export default App;
