export const AddItemToCart =(cartItems, itemToAdd) =>{
    console.log(itemToAdd.id)
    const existingCartItem = cartItems.find(item => {
        console.log(item.id)
        return (
        item.id === itemToAdd.id)})
    
    
    if(existingCartItem){
        return cartItems.map(item =>
            item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item
        )}
    else{
        return [...cartItems, {...itemToAdd, quantity:1}]
    }
}

export const DecreaseItemQuantity = (cartItems, itemToDecrease) => {
    const existing = cartItems.find(item => item.id === itemToDecrease.id)
    if(existing.quantity === 1){
        return cartItems.filter (item => item.id !== itemToDecrease.id)
    }
    
    if(existing){
        return cartItems.map(item =>
            item.id === itemToDecrease.id ? {...item, quantity: item.quantity-1} : item);
               
    }
    else{
        return cartItems
    }
    
}


