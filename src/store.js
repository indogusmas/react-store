import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { cartReducer } from "./reducer/CartReducer";
import { userLoginReducer } from './reducer/UserReducer';

const userInfoFromStorage = localStorage.getItem('userInfo') ? 
        JSON.parse(localStorage.getItem('userInfo')): [];

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
        JSON.parse(localStorage.getItem('cartItems')): [];


const reducer = combineReducers({
    userLogin: userLoginReducer,
    cart: cartReducer
});



const initialState = {
    userLogin: {userInfo: userInfoFromStorage},
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: {}
    }
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
)

export default store;