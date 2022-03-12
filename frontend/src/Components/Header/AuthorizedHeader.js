import React, { Component } from 'react';
import { NavLink, Link, Redirect } from 'react-router-dom';
import { Navbar, Nav, Container} from 'react-bootstrap';

class AuthorizedHeader extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Navbar collapseOnSelect fixed='static-top' expand='sm' bg='dark' variant='dark'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav'>
                        <Nav>
                            <Nav.Link to='/home'>Home</Nav.Link>
                            <Nav.Link to='/login' onClick={this.handleLogout}>logout</Nav.Link> 
                            <Redirect to='/home'/>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        )
    }
}

export default AuthorizedHeader;