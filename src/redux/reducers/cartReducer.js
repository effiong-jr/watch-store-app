import {
    VIEW_CART_ITEMS, 
    ADD_TO_CART, 
    DELETE_FROM_CART, 
    INCREASE_QUANTITY_BY_ONE, 
    DECREASE_QUANTITY_BY_ONE,
} from '../actions/actionTypes';


const cart = {
    items: [],
    sumTotal: 0,
}



const cartReducer = (state = cart, action) => {
    switch(action.type){
        case VIEW_CART_ITEMS: {
            return state;
        }
        
        case ADD_TO_CART: {
            const itemsAfterAdd = Object.assign({}, state, {items: [...state.items, action.payload]});

            //Compute Total of items in cart after add. 
            const totalAfterAdd = itemsAfterAdd.items.map( item => item.total).reduce( (a, b) => a + b);
            return Object.assign({}, state, itemsAfterAdd, {sumTotal: totalAfterAdd});
        }
        
        case INCREASE_QUANTITY_BY_ONE: {
            const itemForIncrease = state.items.filter( item => item.id === action.payload.id)[0];

            //Check for the item clicked and increase its quantity and compute its total sum
            const listAfterIncrease = state.items.map( item => {
                if(item.id === itemForIncrease.id) {
                    itemForIncrease.quantity += 1;
                    itemForIncrease.total = (action.payload.price * itemForIncrease.quantity);
                    return itemForIncrease;
                } else {
                    return item;
                }
            });

            //Get the Subtotal of all items and return its sum
            const sumAfterIncrease = ( state, action) => {
                const totalAfterIncrease = state.items.map( items => items.total).reduce( (a, b) => a + b);
                return totalAfterIncrease
            }
            
            return Object.assign({}, state, {items: [...listAfterIncrease ], sumTotal: sumAfterIncrease(state, action)});
        }
        
        case DECREASE_QUANTITY_BY_ONE: {
            const itemForDecrease = state.items.filter( item => item.id === action.payload.id)[0];
            const listAfterDecrease = state.items.map( item => {
                
                //get id for the item the user wants to reduce quantity
                if(item.id === itemForDecrease.id) {
                    
                    //Check if the quantity is already 1 which is the minimum qty, return 1, 
                    //else, subtract 1 from quantity and subtract the price from its total amount.
                    if(itemForDecrease.quantity <= 1) { 
                        itemForDecrease.quantity = 1;
                    } else {
                        itemForDecrease.quantity -= 1;
                        itemForDecrease.total -= action.payload.price;
                    };
                    return itemForDecrease;

                } else {
                    return item;
                }
            });
            
            //Calculate the sum of all item's total after quantity and price deduction;
            const checkQuantity = (state, action) => {
                const getSubTotal = state.items.map( item => item.total).reduce((a,b)=> a + b);
                return getSubTotal;
            }

            return Object.assign({}, state, {items: [...listAfterDecrease ], sumTotal: checkQuantity(state, action)});
        }  

        case DELETE_FROM_CART: {
            const item_for_delete = state.items.filter( item => item.id === action.payload)[0];
            const total_of_item_for_delete = item_for_delete.total;
            const items_list_after_delete = state.items.filter( item => item.id !== item_for_delete.id);

            return Object.assign({}, state, {items : [...items_list_after_delete], sumTotal: state.sumTotal - total_of_item_for_delete});
        }

        default: {
            return state;
        }
    }
}

export {cartReducer};