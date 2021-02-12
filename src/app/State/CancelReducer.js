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

export default function CancelReducer( state = INITIAL_STATE, action ) {

    switch (action.type) {
        case ActionTypes.FETCH_CANCELS_FULFILLED:
            return {...state, orders: action.payload };

        default:
            return state;
    }
}