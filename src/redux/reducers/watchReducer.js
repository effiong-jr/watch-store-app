import {watches} from './watchsInfo';

const allWatches = watches;

const watchReducer = ( state = allWatches, action) => {
    switch(action.type) {
        case "view": {
            return state;
        }
        
        default: {
            return state;
        }
    }
}

export {watchReducer};