import {CartActionTypes} from './cart.types'
import {AddItemToCart} from './cartutils'
const INITIAL_STATE ={
    hidden : true,
    cartItems: [],
}

const CartReducer = (state = INITIAL_STATE, action )=>{
    if(action.type ===  CartActionTypes.TOGGLE_CART_HIDDENT){
        return {...state, hidden: !state.hidden}
    }
    if(action.type === CartActionTypes.ADD_ITEM){
        console.log(state.cartItems)
        return {...state, cartItems : AddItemToCart(state.cartItems, action.payload)}
    }
    return state;
}

export default CartReducer;