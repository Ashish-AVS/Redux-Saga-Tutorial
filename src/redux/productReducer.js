// import { ADD_TO_CART, CLEAR_CART, REDUCE_FROM_CART } from "./constants";

import { PRODUCT_LIST } from "./constants"

export const productData = (data=[], action) => {
    switch(action.type){
        case PRODUCT_LIST:
            console.warn("productData called", action.data)
            return action.data
        default:
            return data
    }
}