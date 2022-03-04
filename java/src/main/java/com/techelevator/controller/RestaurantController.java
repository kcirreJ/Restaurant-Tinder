package com.techelevator.controller;

import com.techelevator.dao.JdbcRestaurantDao;
import com.techelevator.model.Restaurant;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class RestaurantController {

    private List<Restaurant> restaurants = new ArrayList<>();

    private JdbcRestaurantDao restaurantDao;

    public RestaurantController(JdbcRestaurantDao jdbcRestaurantDao) {
        this.restaurantDao = jdbcRestaurantDao;
    }

    @RequestMapping(value = "/restaurants/zip", method = RequestMethod.GET)
    public List<Restaurant> getRestaurantByZip(@Valid @RequestBody String zip) {
        List<Restaurant> restaurants = new ArrayList<>();
        if(zip != null){
          restaurants = restaurantDao.getRestaurants(Integer.valueOf(zip));
       }
        return restaurants;
    }


    @RequestMapping(value = "/zip", method = RequestMethod.POST)
    public Restaurant getRestaurantByZip(@Valid @RequestBody Restaurant restaurant) {

        return restaurantDao.addRestaurant(restaurant);
    }

//    @ResponseStatus(HttpStatus.NOT_FOUND)
    @RequestMapping(path = "/restaurants" , method = RequestMethod.GET)
    public List<Restaurant> list() {
        return restaurantDao.list();
    }
}
