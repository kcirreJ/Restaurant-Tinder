package com.techelevator.model;

import java.time.LocalDateTime;
import java.util.Objects;

public class Restaurant {

    private Long id;
    private String name;
    private String address;
    private String city;
    private Integer zip;
    private String phone;
    private String description;
    private String type;
    private String open;
    private String closed;
    private String image;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public Integer getZip() {
        return zip;
    }

    public void setZip(Integer zip) {
        this.zip = zip;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getOpen() {
        return open;
    }

    public void setOpen(String open) {
        this.open = open;
    }

    public String getClosed() {
        return closed;
    }

    public void setClosed(String closed) {
        this.closed = closed;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Restaurant that = (Restaurant) o;
        return id.equals(that.id) && name.equals(that.name) && address.equals(that.address) && city.equals(that.city) && zip.equals(that.zip) && phone.equals(that.phone) && description.equals(that.description) && type.equals(that.type) && open.equals(that.open) && closed.equals(that.closed) && image.equals(that.image);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, address, city, zip, phone, description, type, open, closed, image);
    }

    @Override
    public String toString() {
        return "Restaurant{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", address='" + address + '\'' +
                ", city='" + city + '\'' +
                ", zip=" + zip +
                ", phone=" + phone +
                ", description=" + description +
                ", type=" + type +
                ", open=" + open +
                ", closed=" + closed +
                ", image=" + image +
                '}';
    }
}


