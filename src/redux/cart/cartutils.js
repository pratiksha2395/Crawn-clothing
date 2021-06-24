export const AddItemToCart =(cartItems, itemToAdd) =>{
    console.log(itemToAdd.id)
    const existingCartItem = cartItems.find(item => {
        console.log(item.id)
        return (
        item.id === itemToAdd.id)})
    
    console.log(existingCartItem)

    if(existingCartItem){
        return cartItems.map(item =>
            item.id === itemToAdd.id ? {...item, quantity: item.quantity + 1} : item
        )}
    else{
        return [...cartItems, {...itemToAdd, quantity:1}]
    }
}


