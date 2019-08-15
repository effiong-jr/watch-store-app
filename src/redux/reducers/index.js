import {combineReducers} from 'redux'

import {cartReducer} from './cartReducer';
import {watchReducer} from './watchReducer';

const rootReducer = combineReducers({ cart: cartReducer, watch:watchReducer});

export default rootReducer;
