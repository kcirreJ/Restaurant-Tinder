import {Component} from 'react'
import {Switch, Route, Redirect, Link} from 'react-router-dom'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import {addToken, deleteUser} from '../../Redux/actionCreators'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { fetchRestaurants } from '../../Redux/actionCreators'
import GuestHeader from '../Header/GuestHeader'
import Footer from '../Footer/Footer'
import AuthorizedHeader from '../Header/AuthorizedHeader'
import RestaurantList from '../Restaurant/RestaurantList';

const mapStateToProps = state => {
    return {
        restaurants: state.restaurants,
        token: state.token,
        user: state.user
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())},
    fetchRestaurants: () => {dispatch(fetchRestaurants())}
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
                            <AuthorizedHeader />
                        </div>  
                    : 
                        <GuestHeader />
                }
                
                    <Switch>
                        <Route path='/login' component={() => <Login/>}/>
                        <Route path='/register'component={() => <Register/>}/>
                        <Route path='/home' component={this.props.token.token !== undefined ? () => <Home rest/> : null}/>
                        <Route path='/restaurants' component={() => <RestaurantList restaurants={this.props.restaurants.restaurants} isLoading={this.props.restaurants.isLoading} errMess={this.props.restaurants.errMess} />}/>
                        <Redirect to='/login'/>
                    </Switch>
            </div>
        )
    }
} 

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));