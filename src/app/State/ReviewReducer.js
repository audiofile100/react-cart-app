import * as ActionTypes from './ActionTypes';

const INITIAL_STATE = {

    reviews: []
}

export default function ReviewReducer( state = INITIAL_STATE, action ) {

    switch (action.type) {
        case ActionTypes.FETCH_REVIEW_FULFILLED:
            return {...state, reviews: action.payload };

        default:
            return state;
    }
}