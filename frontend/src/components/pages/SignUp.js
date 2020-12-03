import React, { useState } from 'react';
import '../pagesStyle/SignUp.css';
import Header from '../headers/Header';

function SignUp() {
    // Declare a new state variable, which we'll call "count"
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [nume, setNume] = useState('');
    const [prenume, setPrenume] = useState('');

    const handleChangeUsername = (e) => {
        setUserName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }
    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }
    const handleChangeNume = (e) => {
        setNume(e.target.value);
    }
    const handleChangePrenume = (e) => {
        setPrenume(e.target.value);
    }

    function validate() {
        if (username.length <= 3) {
            alert('salut ^^')
        }
    }

    return (
        <div>
            <Header name={'Sign Up'} />

            <h1>Sign up</h1>
            <label for="username">Username: </label>
            <input type="text" id="username" onChange={handleChangeUsername} />
            <label for="email">Email(@stud.ase.ro): </label>
            <input type="text" id="email" onChange={handleChangeEmail} />
            <label for="password">Password: </label>
            <input type="text" id="password" onChange={handleChangePassword} />
            <label for="confirmPassword">Confirm password: </label>
            <input type="text" id="confirmPassword" onChange={handleChangeConfirmPassword} />
            <label for="nume">Nume: </label>
            <input type="text" id="nume" onChange={handleChangeNume} />
            <label for="prenume">Prenume: </label>
            <input type="text" id="prenume" onChange={handleChangePrenume} />


            <input type="button" value="Sign up" onClick={validate} />
        </div>
    );
}

export default SignUp;