import {createSelector} from 'reselect';

const selectCart = state => state.cart;

export const selectCartItems = createSelector([selectCart], cart => cart.cartItems)
export const selectCartHidden = createSelector([selectCart], cart=> cart.hidden)

export const selectCartCount = createSelector([selectCartItems], 
    cartItems => cartItems.reduce((accumulated, item) => accumulated + item.quantity ,  0));

export const selectcartPriceTotal =createSelector([selectCartItems], 
        cartItems => cartItems.reduce((accumulated, item)=> 
        accumulated+ item.quantity* item.price , 0));