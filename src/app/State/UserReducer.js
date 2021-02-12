import * as ActionTypes from './ActionTypes';

const INITIAL_STATE = {
    user: {
        userName: "",
        password: "",
        street: "",
        mobile: "",
        _id: ""
    },
    loading: false
}

export default function userReducer(state = INITIAL_STATE, action) {

    switch (action.type) {
        
        case ActionTypes.AddUserToStore:
            return {...state, user: action.payload.user};

        default:
            return state;
    }
}