import { CART_ADD_ITEM } from "../constant/cart"

export const addToChart = (id, qty) => async (dispath,getState) => {
    
    //get id from server

    const {data} = {
        id,qty
    }

    dispath({
        type: CART_ADD_ITEM,
        payload: {
            id: id,
            qty: qty
        }
    })
    console.log(getState().cart.cartItems);
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems));
}