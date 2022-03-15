import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Restaurants } from './restaurants'
import { Zip } from './zipCode'
import {Token} from './token'
import {User} from './user'

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            restaurants: Restaurants,
            zip: Zip,
            token: Token,
            user: User
        }),
        applyMiddleware(thunk)
    );

    return store;
}