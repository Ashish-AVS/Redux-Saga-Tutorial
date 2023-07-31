import {put, takeEvery, takeLatest, takeLeading} from 'redux-saga/effects' 
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constants'

// Worker Saga - Handles the asynchronous operation
function* fetchProducts(){
    let data = yield fetch('https://jsonplaceholder.typicode.com/todos')
    data = yield data.json() 
    console.warn("action called", data)
    yield put({type:SET_PRODUCT_LIST, data})
}

// Watcher Saga - Listens for a specific action and triggers the worker saga
export default function* productSaga(){
// This is a generator function used to deal with async/await
// takeEvery will run two functions concurrently, and the finish of a method
// may be out of order
    yield takeEvery(PRODUCT_LIST, fetchProducts)
    // This will return the latest call, and if there are any other instances running
    // this will cancel them out and run
    // yield takeLatest() 
}   
