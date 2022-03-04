package com.techelevator.model;

import java.time.LocalDateTime;
import java.util.Objects;

public class Restaurant {

    private Long id;
    private String name;
    private String address;
    private String city;
    private Integer zip;
    private Integer phone;
    private LocalDateTime open;
    private LocalDateTime closed;

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

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public LocalDateTime getOpen() {
        return open;
    }

    public void setOpen(LocalDateTime open) {
        this.open = open;
    }

    public LocalDateTime getClosed() {
        return closed;
    }

    public void setClosed(LocalDateTime closed) {
        this.closed = closed;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Restaurant that = (Restaurant) o;
        return id.equals(that.id) && name.equals(that.name) && address.equals(that.address) && city.equals(that.city) && zip.equals(that.zip) && phone.equals(that.phone) && open.equals(that.open) && closed.equals(that.closed);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, name, address, city, zip, phone, open, closed);
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
                ", open=" + open +
                ", closed=" + closed +
                '}';
    }
}


