package com.techelevator.controller;

import com.techelevator.dao.JdbcRestaurantDao;
import com.techelevator.model.Restaurant;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin
public class RestaurantController {

    private JdbcRestaurantDao jdbcRestaurantDao;

    public RestaurantController(JdbcRestaurantDao jdbcRestaurantDao) {
        this.jdbcRestaurantDao = jdbcRestaurantDao;
    }

    @RequestMapping(value = "/restaurants/zip", method = RequestMethod.GET)
    public List<Restaurant> getRestaurantByZip(@Valid @RequestBody String zip) {
        List<Restaurant> restaurants = new ArrayList<>();
        if(zip != null){
          restaurants = jdbcRestaurantDao.getRestaurants(Integer.valueOf(zip));
       }
        return restaurants;
    }


    @RequestMapping(value = "/restaurants", method = RequestMethod.POST)
    public Restaurant getRestaurantByZip(@Valid @RequestBody Restaurant restaurant) {

        return jdbcRestaurantDao.addRestaurant(restaurant);
    }
}
