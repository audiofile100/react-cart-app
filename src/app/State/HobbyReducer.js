import * as ActionTypes from './ActionTypes';

const INITIAL_STATE = {

    hobbies: []
}

export default function HobbyReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        case ActionTypes.FETCH_HOBBY_FULFILLED:
            console.log("action.payload: ", action.payload);
            return {...state, hobbies: action.payload };

        default:
            return state;
    }
}