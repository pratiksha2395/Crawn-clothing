import {shopActionsTypes} from './shop.types'
const INITIAL_STATE= {
    collections : null
}

const ShopReducer = (state= INITIAL_STATE, action)=>{
    if(action.type === shopActionsTypes.UPDATE_COLLECTION){
        return {
            ...state,
            collections: action.payload
        }
    }
    return state
}

export default ShopReducer