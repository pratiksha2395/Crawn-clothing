import {CartActionTypes} from './cart.types'

const INITIAL_STATE ={
    hidden : true
}

const CartReducer = (state=INITIAL_STATE, action )=>{
    if(action.type ===  CartActionTypes.TOGGLE_CART_HIDDENT){
        return {...state, hidden: !state.hidden}
    }
    return state;
}

export default CartReducer;