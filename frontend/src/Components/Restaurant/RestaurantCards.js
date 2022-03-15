import React, { Component } from 'react';
import Media from 'react-bootstrap/Media';
import { Container, Card } from 'react-bootstrap';
import { useState } from 'react';
import phoneIcon from '../../images/phone-icon.png'

function ListRestaurants({restaurant}) {
    const [value, setValue] = useState(0);

    return (
        <Media as="li">
            <img
                width={64}
                height={64}
                className="mr-3"
                src={restaurant.image}
                alt={restaurant.name}
            />

            <button className='btn btn-outline-success' id='thumbs-up' key={restaurant.id} tabIndex = "0"
            onClick={()=> setValue(value + 1)}>Like</button>
            <button className='btn btn-outline-danger' id='thumbs-down' key={restaurant.id} tabIndex = "0"
             onClick={()=> setValue(value - 1)}>Dislike</button>

            <Media.Body>
                <h4>{restaurant.name} <a href= "tel: {restaurant.phone}" ><img src={phoneIcon} alt="phone-logo" className='logo'/> { restaurant.phone} </a> </h4>
                <h5>{restaurant.type} | {restaurant.address} | hours {restaurant.open} - {restaurant.closed}</h5>
                <p>
                {restaurant.description}
                </p>
            </Media.Body>
        </Media>
    )
}

const RestaurantCards = (props) => {
    console.log(props.restaurants)

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

export default RestaurantCards;