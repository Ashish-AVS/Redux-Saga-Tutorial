// import { ADD_TO_CART, CLEAR_CART, REDUCE_FROM_CART } from "./constants";

import { PRODUCT_LIST } from "./constants"

// // This reducer should have non empty data and a non-null return type
// export const cartData = (data=[], action) => {
//     // here data contains previous state
//     switch(action.type){
//         case ADD_TO_CART:
//             console.warn("addToCart action called", action)
//             return [action.data, ...data]
//         case REDUCE_FROM_CART:
//             console.warn("reduce from cart reducer called", action)
//             data.length = data.length ? data.length - 1 : [] 
//             return [...data]
//         case CLEAR_CART:
//             console.warn("clear cart called", action)
//             return []
//         default:
//             console.warn("No action matched!");
//             return data
//     }
// }

export const productData = (data=[], action) => {
    switch(action.type){
        case PRODUCT_LIST:
            console.warn("productData called", action.data)
            return action.data
        default:
            return data
    }
}