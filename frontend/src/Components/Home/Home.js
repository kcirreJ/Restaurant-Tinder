import {Link} from 'react-router-dom';
import '../../index.css'; 
import theLogo from '../../images/the-logo-result.png'
import chefFood from '../../images/chef-food.png'
import React from 'react';
import ReactDOM from 'react-dom';

const Home = (props) => {
  return (
    <body id='home'>
      <img src={chefFood} alt="logo" className='logo'/>
     <main id='main'>
      <img src={theLogo} alt="logo=two" className='logo-two' onMouseOver={{color: 'red'}}/>
      <SearchBar />
     </main>
    </body>
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
        <button type="submit">Search</button>
        </div>
        
    </form>
);

export default Home;