export const cartReducer=(state,{type,payload})=>{
    switch(type){
        case "ADD_TO_CART":
            const existingProduct = state.cart.find(product => product.id === payload.id);
            if (existingProduct) {
                return {
                    ...state,
                    cart: state.cart.map(product =>
                        product.id === payload.id 
                            ? { ...product, quantity: product.quantity + 1 }
                            : product
                    )
                };
            } else {
                return {
                    ...state,
                    cart: [...state.cart, { ...payload, quantity: 1 }]
                };
            }
        case "DECREMENT":
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === payload 
                        ? { ...product, quantity: product.quantity - 1 }
                        : product
                ).filter(product => product.quantity > 0)
            }
        case "INCREMENT":
            return {
                ...state,
                cart: state.cart.map(product =>
                    product.id === payload 
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                )
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== payload)
            }
        default:
            return state
    }
}