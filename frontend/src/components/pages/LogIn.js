import React, { useState } from 'react';
import '../pagesStyle/LogIn.css';
import Header from '../headers/Header';
import {useHistory} from "react-router-dom";

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
    
    function validate(){
      if(username.replace(/\s/g, "").length < 5 || username.replace(/\s/g, "").length > 15){
        alert("Username-ul este invalid!");
        return false;
      }
      if(password.replace(/\s/g, "").length < 8 || password.replace(/\s/g, "").length > 16){
        alert("Password-ul este invalid!");
        return false;
      }
      return true;
    
    }
     function LogIn(){
      if(validate()){
        alert("Datele sunt corecte!")
        
        const materii = useHistory();
        let path = `./Materii.js`; 
        materii.push(path);
 
      }
     }

    return (
      <div>
        <Header name={"Log In"} />

        <h1 id="Title">Bine ati venit la maimute</h1>
        <h2 id="Login">Log in or sign up</h2>
        <div id="divLogIn">
        <label for="username">Username: </label>
        <input type="text" id="username" onChange={handleChangeUsername}/>
        <label for="password">Password: </label>
        <input type="text" id="password" onChange={handleChangePassword}/>
        
        <input type="button" value="Log in" id="btnLogIn" onClick={LogIn}/>
        <a href="www.google.com" id="SignUp">Sign up</a>
        </div>
        
      </div>
    );
  }

  export default LogIn;