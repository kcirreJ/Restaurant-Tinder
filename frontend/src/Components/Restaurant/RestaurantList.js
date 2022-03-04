import {Link} from 'react-router-dom'
import React, { Component } from 'react';

function X({restaurant}) {
    return (
        <p>{restaurant.city}</p>
    )
}

const RestaurantList = (props) => {

    const r = props.restaurants.map((restaurant) => {
        return (
            <div>
                <X restaurant={restaurant} />
            </div>
        )
    })
    
    return (
        <>
        <p>{r}</p>
        </>
    )

}

export default RestaurantList;