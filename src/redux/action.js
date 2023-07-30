// Actions are normal functions that can perform some mainpulations like API calls
// and interact with the redux store of the same type

export const addToCart = (data) => {
    console.warn("Action called", data)
    // returns data to a reducer
    return {
        type: "ADD_TO_CART",
        data
    }
}

