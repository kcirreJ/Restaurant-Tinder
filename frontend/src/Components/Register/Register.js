import React, { Component } from 'react';
import axios from 'axios';
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Alert, Form, FormGroup, Label, Input, Col, FormFeedback } from 'reactstrap';
import '../../Components/Register/register.css';
import {baseUrl} from '../../Shared/baseUrl'
class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            confirmpassword: '',
            touched: {
                email: false,
                password: false,
                confirmpassword: false
            },
            globalMessage: '',
            userAlreadyExit: false
       }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }
    handleSubmit(event) {
        console.log("Current State is:" + JSON.stringify(this.state));
        alert("Current State is:" + JSON.stringify(this.state));
        const postData ={
            email: this.state.email,
            password: this.state.password,
            username: this.state.email,
            lastName: 'lastName',
            firstName: 'firstName',
            confirmPassword:  this.state.confirmpassword,
            role: 'ROLE_USER'
        }
        //POST request with body equal on data in JSON format
        fetch('http://localhost:8081/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(postData),
        })
        .then (response => {
                        if(response.status ==  201){
                           return response;
                        } else{
                            return response.json();
                        }
               })
        .then((response) => {
            if(response.status == 201){
                 this.setState({
                 globalMessage:'User is created',
                 userAlreadyExit: false
                 });
            } else if(response.status == 400){
               this.setState({
                   globalMessage: response.message,
                   userAlreadyExit: true
                   });
                }
            })
            .catch((error) => {
                console.error('Error:', error);
                this.setState({globalError:'Error found in saveing'});
            });
            event.preventDefault();
    }
    handleBlur = (field) => (evt) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    CheckSymbols(str) {
    const specialSymbols = /[`!@#$%^&]/; // This is to hold the values that we can have in a password.
    return specialSymbols.test(str); // test, is a method in the js library that returns true or false depending in your input.
    }
    validate(email, password, confirmpassword) {
        const errors = {
            email: '',
            password: '',
            confirmpassword: ''
        };
        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            errors.email = 'Email should contain a @';
        if (this.state.touched.password && this.CheckSymbols(password))
            errors.password = 'Password should contain at least one of the following !@#$%';
        if (this.state.touched.password && password.length < 3)
            errors.password = 'Password should be >= 3 characters';
        else if (this.state.touched.password && password.search(/[A-Z]/) < 0)
            errors.password = 'Password needs at least one uppercase letter';
        else if (this.state.touched.password && password.length > 10)
            errors.password = 'Password should be <= 10 characters';
        //else if (this.state.touched.password && !this.CheckSymbols(password))
        //errors.password = 'Password should contain at least one of the following !@#$%';
        if(this.state.touched.confirmpassword && confirmpassword != password)
            errors.confirmpassword = 'Password does not match';
        return errors;
    }
    render() {
        const errors = this.validate(this.state.email, this.state.password, this.state.confirmpassword);
        return (
            <>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <h1 className="text-center">Welcome</h1>
                <br/>
                <br/>
                  {!this.state.userAlreadyExit && this.state.globalMessage && this.state.globalMessage.length > 0 &&<Alert color="primary">{this.state.globalMessage}</Alert>}
                  {this.state.userAlreadyExit &&  this.state.globalMessage && this.state.globalMessage.length > 0 &&<Alert color="danger">{this.state.globalMessage}</Alert>}
                <FormGroup>
                    <Input type="email" id="email" name="email"
                        placeholder="Email"
                        value={this.state.email}
                        valid={errors.email === ''}
                        invalid={errors.email !== ''}
                        onBlur={this.handleBlur('email')}
                        onChange={this.handleInputChange} />
                    <FormFeedback>{errors.email}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="password" name="password"
                        placeholder="Password"
                        value={this.state.passowrd}
                        valid={errors.password === ''}
                        invalid={errors.password !== ''}
                        onBlur={this.handleBlur('password')}
                        onChange={this.handleInputChange} />
                    <FormFeedback>{errors.password}</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <Input type="password" id="confirmpassword" name="confirmpassword"
                        placeholder="Confirm password"
                        value={this.state.confirmpassword}
                        valid={errors.confirmpassword === ''}
                        invalid={errors.confirmpassword !== ''}
                        onBlur={this.handleBlur('confirmpassword')}
                        onChange={this.handleInputChange} />
                    <FormFeedback>{errors.confirmpassword}</FormFeedback>
                </FormGroup>
                <Button className="btn-md btn-dark btn-block">Register</Button>
            </Form>
            </>
        );
    }
}
export default Register;