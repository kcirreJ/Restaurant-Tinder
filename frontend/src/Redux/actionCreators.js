import * as ActionTypes from './actionTypes'
import { baseUrl } from '../Shared/baseUrl';

export const addToken = (token) => ({
    type: ActionTypes.ADD_TOKEN,
    payload: token
});

export const addUser = (user) => ({
    type: ActionTypes.ADD_USER,
    payload: user
})

export const deleteUser = () => ({
    type: ActionTypes.DELETE_USER
})

export const fetchRestaurants = () => (dispatch) => {
    dispatch(restaurantsLoading(true));

    return fetch(baseUrl + 'restaurants')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
        .then(response => response.json())
        .then(restaurants => dispatch(addRestaurants(restaurants)))
        .catch(error => dispatch(restaurantsFailed(error.message)))
}

export const restaurantsLoading = () => ({
    type: ActionTypes.RESTAURANTS_LOADING
});

export const restaurantsFailed = (errmess) => ({
    type: ActionTypes.RESTAURANTS_FAILED,
    payload: errmess
});

export const addRestaurants = (restaurants) => ({
    type: ActionTypes.ADD_RESTAURANTS,
    payload: restaurants
})