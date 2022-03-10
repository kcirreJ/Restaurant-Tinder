import {Link} from 'react-router-dom';
import '../../index.css'; 
import theLogo from '../../images/the-logo-result.png'
import chefFood from '../../images/chef-food.png'
import React from 'react';
import ReactDOM from 'react-dom';

const Home = (props) => {
  return (
    <div id='home'>
      <img src={chefFood} alt="logo" className='logo'/>
     <main id='main'>
      <img src={theLogo} alt="logo=two" className='logo-two' onMouseOver={{color: 'red'}}/>
      <SearchBar />
     </main>
     
    </div>
  );
}

const SearchBar = () => (
   
     <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden"></span>
        </label>
        <div id='container'>
          <input
            type="text"
            id="header-search"
            placeholder="City/Zipcode"
            name="s" 
            size={75}
        />
        <button type="submit" className="btn-md btn-secondary btn-block text-align" >Search</button>
        </div>
        
    </form>
  
);



export default Home;