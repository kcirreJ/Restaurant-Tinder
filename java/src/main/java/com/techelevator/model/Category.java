package com.techelevator.model;

public enum Category {

    JAPANESE,
    AMERICAN,
    ITALIAN,
    ETHIOPIAN,
    FRENCH;

    public static Category getCategory(String value){

        for (Category  category: values()){
            if(category.name().equalsIgnoreCase(value)){
                return category;
            }
        }

        return null;

    }

}
