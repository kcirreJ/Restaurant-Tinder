package com.techelevator.dao;

import com.techelevator.model.Restaurant;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class JdbcRestaurantDao implements RestaurantDao {

    private JdbcTemplate jdbcTemplate;

    public JdbcRestaurantDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Restaurant addRestaurant(Restaurant restaurant) {
        return null;
    }

    @Override
    public List<Restaurant> getRestaurants(int zip) {
        String sql = "SELECT * FROM Restaurnts WHERE zip = ?";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, zip);
        List<Restaurant> restaurants = new ArrayList<>();
        while(results.next()) {
            Restaurant restaurant = mapRowToRestaurant(results);
            restaurants.add(restaurant);
        }
        return restaurants;
    }

    @Override
    public List<Restaurant> list() {
        List<Restaurant> restaurants = new ArrayList<>();
        String sql = "SELECT * FROM Restaurants";

        SqlRowSet results = jdbcTemplate.queryForRowSet(sql);
        while(results.next()) {
            Restaurant restaurant = mapRowToRestaurant(results);
            restaurants.add(restaurant);
        }
        return restaurants;
    }

    private Restaurant mapRowToRestaurant(SqlRowSet rs) {
        Restaurant restaurant = new Restaurant();
        restaurant.setId(rs.getLong("restaurant_id"));
        restaurant.setName(rs.getString("name"));
        restaurant.setAddress(rs.getString("address"));
        restaurant.setCity(rs.getString("city"));
        restaurant.setZip(rs.getInt("zip_code"));
        restaurant.setPhone(rs.getString("phone"));
        restaurant.setDescription(rs.getString("description"));
        restaurant.setType(rs.getString("type"));
        restaurant.setOpen(rs.getString("open"));
        restaurant.setClosed(rs.getString("close"));
        restaurant.setImage(rs.getString("image"));
        //TODO:
        return restaurant;
    }
}
