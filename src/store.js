import {createStore, combineReducers, applyMiddleware} from 'redux';
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import user from './app/State/UserReducer';
import hobby from './app/State/HobbyReducer';
import product from './app/State/ProductReducer';
import cart from './app/State/CartReducer';
import order from './app/State/OrderReducer';
import cancel from './app/State/CancelReducer';
import review from './app/State/ReviewReducer';

let myLogger = () => (next) => (action) => {
    next(action);
};

export default createStore(
    combineReducers(
        {
            user,
            hobby,
            product,
            cart,
            order,
            cancel,
            review
        }
    ),
    {},
    applyMiddleware(myLogger, thunk, promise)
)