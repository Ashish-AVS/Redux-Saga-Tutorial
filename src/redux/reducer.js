import { ADD_TO_CART, CLEAR_CART, REDUCE_FROM_CART } from "./constants";

// This reducer should have non empty data and a non-null return type
export const cartData = (data=[], action) => {
    // here data contains previous state
    switch(action.type){
        case ADD_TO_CART:
            console.warn("addToCart action called", action)
            return [action.data, ...data]
        case REDUCE_FROM_CART:
            console.warn("REDUCE_FROM_CART condition ", action);
            let tempData = [...data]
            tempData.length= tempData.length? tempData.length-1:[]
            return [...tempData]
        case CLEAR_CART:
            console.warn("clear cart called", action)
            data = []
            return [...data]
        default:
            console.warn("No action matched!");
            return data
    }
}
