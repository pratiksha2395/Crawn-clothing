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

export const decreseItemQuantity = (item) =>{
    return ({
        type:CartActionTypes.DECREASE_IETEM_QUANTITY,
        payload: item
    })
}

export const RemoveItemFromCart = (item)=>{
    return ({
        type:CartActionTypes.REMOVE_ITEM_FROM_CART,
        payload: item
    })
}