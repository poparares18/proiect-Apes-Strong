import React, { useState } from 'react';
import imgDelete from './imagini/delete.png'
import imgAdd from './imagini/add.png'
import '../pagesStyle/Materii.css'
import HeaderBurger from '../headers/HeaderBurger';


function Materii() {
  // Declare a new state variable, which we'll call "count"
  const [search, setSearch] = useState('');
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }

  return (
    <div>
      <HeaderBurger name={'Materii'} />

      <div id='divMaterii'>
        <input type="text" id="search" onChange={handleChangeSearch} />
        <input type="button" value="Search" />

        <button id="delete" ><img src={imgDelete} width='100px' height='100px' /></button>
        <button id="add" ><img src={imgAdd} width='100px' height='100px' /></button>
      </div>
    </div>
  );
}

export default Materii;