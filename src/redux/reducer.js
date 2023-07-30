import { ADD_TO_CART } from "./constants";

// This reducer should have non empty data and a non-null return type
export const cartData = (data=[], action) => {
    // This will catch all actions
    // if(action.type === ADD_TO_CART){
        // console.warn("cartData reducer called", action);
        // return data
    // }
    // console.warn("ADD TO CART WAS NOT CALLED")
    // return data

    switch(action.type){
        case ADD_TO_CART:
            console.warn("addToCart action called", action)
            return action.data
        default:
            console.warn("No action matched!");
            return data
    }
}
