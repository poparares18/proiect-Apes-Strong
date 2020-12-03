import React from 'react';
import stil from './HeaderBurger.css'

function Header(props) {


  return (

    <div id='divHeader' style={stil}>

<nav role="navigation">
  <div id="menuToggle">
  
    <input type="checkbox" />

    
    <span></span>
    <span></span>
    <span></span>

   
    <ul id="menu">
      <a href="#"><li>Home</li></a>
      <a href="#"><li>About</li></a>
      <a href="#"><li>Info</li></a>
      <a href="#"><li>Contact</li></a>
      <a href="https://erikterwan.com/" target="_blank"><li>Show me more</li></a>
    </ul>
  </div>
</nav>

      <p>{props.name}</p>
    </div>
  );
}

export default Header;