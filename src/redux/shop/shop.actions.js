import {shopActionsTypes} from './shop.types'

export const updateCollection = (collectionMap) => ({
    type:shopActionsTypes.UPDATE_COLLECTION,
    payload: collectionMap
})