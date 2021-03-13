import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from 'redux-thunk';
import { userLoginReducer } from './reducer/UserReducer';


const reducer = combineReducers({
    userLogin: userLoginReducer
});


const userInfoFromStorage = localStorage.getItem('userInfo') ? 
        JSON.parse(localStorage.getItem('userInfo')): [];

const initialState = {
    userLogin: {userInfo: userInfoFromStorage}
}

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(thunk)
)

export default store;