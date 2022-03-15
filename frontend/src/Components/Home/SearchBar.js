import { Component, useState} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {addToken, addUser, getZip} from '../../Redux/actionCreators'
import {baseUrl} from '../../Shared/baseUrl'
import axios from 'axios'
import { Container } from 'react-bootstrap'


const mapDispatchToProps = (dispatch) => ({
    getZip: () => { dispatch(getZip()) }
});

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            zip: ''
        }
        this.routeChange = this.routeChange.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    
    routeChange() {
        let path = `/restaurants`;
        this.props.history.push(path);
    }

    render() {
        return(
            <Container>
                <label class="sr-only">Search Nearby Restaurants</label>
                <input
                    type="text"
                    name="zip"
                    class="form-control"
                    placeholder="City/Zip"
                />
                <button type="submit" onClick={this.routeChange} >Search</button>
            </Container>
        )
    }
}
  
export default withRouter(connect(mapDispatchToProps)(SearchBar));