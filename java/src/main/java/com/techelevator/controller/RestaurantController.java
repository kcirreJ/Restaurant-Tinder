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

//    @ResponseStatus(HttpStatus.NOT_FOUND)
    @RequestMapping(path = "/restaurants/{zip}" , method = RequestMethod.GET)
    public List<Restaurant> getRestaurantByZip(@PathVariable int zip) {
        return restaurantDao.list(zip);
    }
}


