// Actions are normal functions that can perform some mainpulations like API calls
// and interact with the redux store of the same type
import {ADD_TO_CART, CLEAR_CART, REDUCE_FROM_CART} from './constants'

export const addToCart = (data) => {
    console.warn("Action called", data)
    // returns data to a reducer
    return {
        type: ADD_TO_CART,
        data: data
    }
}

export const reduceFromCart = (data) => {
    console.warn("reduce action called", data)
    // returns data to a reducer
    return {
        type: REDUCE_FROM_CART,
        data: data
    }
}

export const clearCart = (data) => {
    console.warn("clear cart action called", data)
    // returns data to a reducer
    return {
        type: CLEAR_CART,
        data: data
    }
}
