import * as ActionTypes from './ActionTypes';

const INITIAL_STATE = {
    defaultProduct: {
        name : "",
        price : 0,
        camera : "",
        ram : "",
        display : "",
        color : ""
    },
    products:[]
}

export default function ProductReducer( state = INITIAL_STATE, action ) {
    
    switch (action.type) {

        case ActionTypes.FETCH_PRODUCTS_FULFILLED:
            return {...state, products: action.payload };

        default:
            return state;
    }
}