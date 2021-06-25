import {CartActionTypes} from './cart.types'
import {AddItemToCart, DecreaseItemQuantity} from './cartutils'
const INITIAL_STATE ={
    hidden : true,
    cartItems: [],
}

const CartReducer = (state = INITIAL_STATE, action )=>{
    if(action.type ===  CartActionTypes.TOGGLE_CART_HIDDENT){
        return {...state, hidden: !state.hidden}
    }
    if(action.type === CartActionTypes.ADD_ITEM){
        return {...state, cartItems : AddItemToCart(state.cartItems, action.payload)}
    }
    if(action.type === CartActionTypes.REMOVE_ITEM_FROM_CART){
        return ({...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id)})
    }
    if(action.type === CartActionTypes.DECREASE_IETEM_QUANTITY){
        return {...state, cartItems: DecreaseItemQuantity(state.cartItems, action.payload)}
    }
   return state;
}



export default CartReducer;