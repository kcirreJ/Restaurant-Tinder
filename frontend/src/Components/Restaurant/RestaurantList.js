import {Link} from 'react-router-dom'
import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import { Container } from 'react-bootstrap';

function ListRestaurants({restaurant}) {
    return (
        <Media as="li">
            <img
                width={64}
                height={64}
                className="mr-3"
                src={restaurant.image}
                alt={restaurant.name}
            />
            <Media.Body>
                <h4>{restaurant.name}</h4>
                <h5>{restaurant.type} | {restaurant.address} | hours {restaurant.open} - {restaurant.closed}</h5>
                <p>
                {restaurant.description}
                </p>
            </Media.Body>
        </Media>
    )
}

const RestaurantList = (props) => {

    const list = props.restaurants.map((restaurant) => {
        return (
            <Container>
                <ListRestaurants restaurant={restaurant} />
            </Container>
        )
    })
    
    return (
        <ul className='list-unstyled'>
            {list}
        </ul>
    )

}

export default RestaurantList;