import * as ActionTypes from './ActionTypes';

const INITIAL_STATE = {

    defaultOrder: {
        userid: "",
        cart: "",
        date: "",
        _id: ""
    },
    orders: []
}

export default function OrderReducer( state = INITIAL_STATE, action ) {

    switch (action.type) {
        case ActionTypes.FETCH_ORDERS_FULFILLED:
            return {...state, orders: action.payload };

        default:
            return state;
    }
}