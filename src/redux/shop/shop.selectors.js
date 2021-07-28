import {createSelector} from 'reselect'
import memoize from 'lodash.memoize';

// const ITEM_COLLECTION_ID_MAP= {
//     hats: 1,
//     sneakers: 2,
//     jackets: 3,
//     womens: 4,
//     mens: 5
// }
const selectshop= state => state.shop

export const shopSelector = createSelector([selectshop], 
    state => state.collections)


export const selectCollectionForPreview = createSelector([shopSelector],
  collections => collections ? Object.keys(collections).map(key => collections[key]) : [])
// export const selectIdfromCollection = selectUrlParams => {

//     console.log(selectUrlParams)
//     return (
//         createSelector([shopSelector], SHOP_DATA => {
//         console.log(SHOP_DATA)
//         console.log(ITEM_COLLECTION_ID_MAP[selectUrlParams])
//         const new1 = SHOP_DATA.find(
//         item => {
            
//             return (item.id === ITEM_COLLECTION_ID_MAP[selectUrlParams])})
//         console.log(new1)
//         return new1;
// })
//     ) 
//     }

export const selectIdfromCollection =  memoize((collectionUrlParam) =>
  createSelector(
    [shopSelector],
    (collections) => collections ? collections[collectionUrlParam] : null
  )
);