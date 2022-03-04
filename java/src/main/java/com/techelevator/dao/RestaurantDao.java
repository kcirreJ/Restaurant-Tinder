package com.techelevator.dao;

import com.techelevator.model.Restaurant;

import java.util.List;

public interface RestaurantDao {

  List<Restaurant> list();
  Restaurant addRestaurant(Restaurant restaurant);
  List<Restaurant> getRestaurants(int zip);

}
