import {
    VIEW_CART_ITEMS,
    ADD_TO_CART,
    DELETE_FROM_CART,
    INCREASE_QUANTITY_BY_ONE,
    DECREASE_QUANTITY_BY_ONE,
    // CALCULATE_TOTAL,
} from './actionTypes';


export const viewCartItems = () => ({type: VIEW_CART_ITEMS});

export const addToCart = (id, total) => {
    return {
        type: ADD_TO_CART,
        payload: {
            id,
            quantity: 1,
            total,
        }
    }
};

export const deleteFromCart = (id) => {
    return {
        type: DELETE_FROM_CART,
        payload: id
    }
};

export const increaseQuantityByOne = (id, price) => {
    return {
        type: INCREASE_QUANTITY_BY_ONE,
        payload: {id, price}
    }
}

export const decreaseQuantityByOne = (id, price) => {
    return {
        type: DECREASE_QUANTITY_BY_ONE,
        payload: {id, price}
    }
}

// export const calculateTotal = () => {
//     return { type: CALCULATE_TOTAL }
// }