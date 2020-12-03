import React from 'react';
import './Header.css'

function Header(props) {


  return (

    <div id='divHeader' >
      <p>{props.name}</p>
    </div>
  );
}

export default Header;