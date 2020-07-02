export const addItemToCart = (itemsInCart, newItemToAdd) =>{

    const itemExists = itemsInCart.find(item => item.id === newItemToAdd.id);

    if(itemExists){
        return itemsInCart.map(item=>{
        
            return item.id === newItemToAdd.id ?
            {
                ...item,
                quantity: item.quantity + 1
            }
            : item
            
        })
    }

    return [...itemsInCart, {...newItemToAdd, quantity: 1}];
}

export const removeItemFromCart = (cartItems, cartItemToRemove) =>{
    const existingCartItem = cartItems.find(cartItem=> cartItem.id === cartItemToRemove.id);
    
    if(existingCartItem.quantity === 1){
        return cartItems.filter(item => item.id !== cartItemToRemove.id);
    }

    return cartItems.map(item=>
        item.id === cartItemToRemove.id ?
       {...item, quantity: item.quantity -1 }
       :
       item
    )
}