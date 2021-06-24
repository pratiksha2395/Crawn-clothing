import {CartActionTypes} from './cart.types'

export const CartToggleHidden = ()=>{
    return {type: CartActionTypes.TOGGLE_CART_HIDDENT}
}

export const AddItem =(item)=>{
    return ({
        type:CartActionTypes.ADD_ITEM,
        payload: item
    })
}