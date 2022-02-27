package com.techelevator.dao;

import com.techelevator.model.Restaurant;

import java.util.List;

public interface RestaurantDao {

  Restaurant addRestaurant(Restaurant restaurant);
  List<Restaurant> getRestaurants();
  List<Restaurant> getRestaurants(int zip);
  List<Restaurant> getRestaurants(String city);

}
