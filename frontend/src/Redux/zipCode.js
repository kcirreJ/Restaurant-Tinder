import * as ActionTypes from './actionTypes';

export const Zip = (state = {
    zip: ''
}, action) => {
    switch(action.type) {
        case ActionTypes.ADD_ZIP:
            return{...state, zip: action.payload.zip}
        
        default:
            return state;
    }
}