import {combineReducers} from 'redux';

import userReducer from './user/user.reducer'
import CartReducer from  './cart/cart.reducer'
import DirectoyReducer  from './directory/direcetory.reducer'
import  {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import ShopReducer from './shop/shop.reducer'
const persistConfig = {
    key:'root',
    storage, 
    whitelist: ['cart']
}
const roorReducer = combineReducers ({
    user: userReducer,
    cart:CartReducer,
    directory: DirectoyReducer,
    shop: ShopReducer
});


export default persistReducer(persistConfig, roorReducer)
