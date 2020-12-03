import React, { useState } from 'react';
import '../pagesStyle/LogIn.css';
import Header from '../headers/Header';

function LogIn() {
    // Declare a new state variable, which we'll call "count"
    const [username,setUserName] = useState('');
    const [password,setPassword] = useState('');
    const handleChangeUsername = (e)=>{
        setUserName(e.target.value);
    }
    const handleChangePassword = (e)=>{
        setPassword(e.target.value);
    }
    
    return (
      <div>
        <Header name={"Log In"} />

        <h1>Bine ati venit la maimute</h1>
        <h2>Log in or sign up</h2>

        <label for="username">Username: </label>
        <input type="text" id="username" onChange={handleChangeUsername}/>
        <label for="password">Password: </label>
        <input type="text" id="password" onChange={handleChangePassword}/>

        <input type="button" value="Log in"/>
        <a href="www.google.com">Sign up</a>
      </div>
    );
  }

  export default LogIn;