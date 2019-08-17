import {
    VIEW_CART_ITEMS,
    ADD_TO_CART,
    DELETE_FROM_CART,
    INCREASE_QUANTITY_BY_ONE,
    DECREASE_QUANTITY_BY_ONE,
} from './actionTypes';


export const viewCartItems = () => ({type: VIEW_CART_ITEMS});

export const addToCart = (id) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            quantity: 1
        },
    }
};

export const deleteFromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
};

export const increaseQuantityByOne = (id) => {
    return {
        type: INCREASE_QUANTITY_BY_ONE,
        payload: id,
    }
}

export const decreaseQuantityByOne = (id) => {
    return {
        type: DECREASE_QUANTITY_BY_ONE,
        payload: id,
    }
}