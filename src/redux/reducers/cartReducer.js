import {
    VIEW_CART_ITEMS, 
    ADD_TO_CART, 
    DELETE_FROM_CART, 
    INCREASE_QUANTITY_BY_ONE, 
    DECREASE_QUANTITY_BY_ONE
} from '../actions/actionTypes';


const cart = [];



const cartReducer = (state = cart, action) => {
    switch(action.type){
        case VIEW_CART_ITEMS: {
            return state;
        }

        case ADD_TO_CART: {
            return [...state, action.payload];
        }

        case DELETE_FROM_CART: {
            const cart_after_item_delete = state.filter( item => item.id !== action.payload)[0];
            return [...cart_after_item_delete];
        }

        case INCREASE_QUANTITY_BY_ONE: {
            const itemForIncrease = state.filter( item => item.id === action.payload)[0];
            const listAfterIncrease = state.map( item => {
                if(item.id === itemForIncrease.id) {
                    itemForIncrease.quantity += 1;
                    return itemForIncrease;
                } else {
                    return item;
                }
            });

            return [...listAfterIncrease ];
        }
        
        case DECREASE_QUANTITY_BY_ONE: {
            const itemForDecrease = state.filter( item => item.id === action.payload)[0];
            const listAfterDecrease = state.map( item => {

                //get id for the item the user wants to reduce quantity
                if(item.id === itemForDecrease.id) {

                    //Check if the quantity is already 1 which is the minimum qty, return 1, else, subtract 1.
                    if(itemForDecrease.quantity <= 1) { 
                        itemForDecrease.quantity = 1;
                    } else {
                        itemForDecrease.quantity -= 1;
                    };
                    return itemForDecrease;

                } else {
                    return item;
                }
            });

            return [...listAfterDecrease ];
        }
        
        default: {
            return state;
        }
    }
}

export {cartReducer};