import React, {Component} from 'react'
import {Switch, Route, Redirect, Link, NavLink} from 'react-router-dom'
import { Navbar, Nav, Container } from 'react-bootstrap'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import {addToken, deleteUser, fetchRestaurants, getZip} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import GuestHeader from '../Header/GuestHeader'
import Footer from '../Footer/Footer'
import AuthorizedHeader from '../Header/AuthorizedHeader'
import RestaurantList from '../Restaurant/RestaurantList';
import RestaurantCards from '../Restaurant/RestaurantCards';

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        token: state.token,
        user: state.user,
        zip: state.zip
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser()) },
    fetchRestaurants: (zip) => { dispatch(fetchRestaurants(zip)) },
    getZip: (zip) => { dispatch(getZip(zip)) }
});

class Main extends Component {
    constructor(props){
        super(props);
    }

    handleLogout = () => {
        this.props.addToken("")
        this.props.deleteUser()
    }

    componentDidMount() {
        this.props.fetchRestaurants();
    }

    render(){
        return(
            <div>
                {this.props.token.token !== undefined ?
                        <div>
                            <Navbar collapseOnSelect fixed='static-top' expand='sm' bg='dark' variant='dark'>
                                <Container>
                                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                                    <Navbar.Collapse id='responsive-navbar-nav'>
                                        <Nav>
                                            <Nav.Link to='/home'>Home</Nav.Link>
                                            <Nav.Link as={Link} to='/login' onClick={this.handleLogout}>logout</Nav.Link> 
                                            <Redirect to='/home'/>
                                        </Nav>
                                    </Navbar.Collapse>
                                </Container>
                            </Navbar>
                        </div>  
                    : 
                        <GuestHeader />
                }
                
                    <Switch>
                        <Route path='/login' component={() => <Login/>}/>
                        <Route path='/register'component={() => <Register/>}/>
                        <Route path='/home' component={this.props.token.token !== undefined ? () => <Home zip={this.props.zip.zip}/> : null}/>
                        <Route path='/restaurants' component={() => <RestaurantList restaurants={this.props.restaurants.restaurants} isLoading={this.props.restaurants.isLoading} errMess={this.props.restaurants.errMess} />}/>
                        <Route path='/vote' component={() => <RestaurantCards restaurants={this.props.restaurants.restaurants} isLoading={this.props.restaurants.isLoading} errMess={this.props.restaurants.errMess} />}/>
                        <Redirect to='/login'/>
                    </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));