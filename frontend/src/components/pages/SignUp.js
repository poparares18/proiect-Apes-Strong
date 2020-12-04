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
        // Username
        if (username.replace(/\s/g, "").length < 5 ||
            username.replace(/\s/g, "").length > 15) {
            alert('Numele de utilizator trebuie sa aiba cel putin 5 caractere' +
                ' si maxim 15 caractere')
            return false;
        }

        // Email
        if (!email.includes('@stud.ase.ro')) {
            alert('Email nu este institutional')
            return false;
        }

        // Password
        if (password.replace(/\s/g, "").length <= 7 ||
            password.replace(/\s/g, "").length >= 16) {
            alert('Parola trebuie sa aiaba cel putin 8 caractere' +
                ' si maxim 15 caractere')
            return false;
        }

        // Confirm password
        if (password !== confirmPassword) {
            alert('Parolele nu coincid')
            return false;
        }

        // Nume
        if (nume.replace(/\s/g, "").length < 3 ||
            nume.replace(/\s/g, "").length > 15) {
            alert('Numele trebuie sa aiba cel putin 3 caractere' +
                ' si maxim 15 caractere')
            return false;
        }

        // Prenume
        if (prenume.replace(/\s/g, "").length < 3 ||
            prenume.replace(/\s/g, "").length > 15) {
            alert('Prenume trebuie sa aiba cel putin 3 caractere' +
                ' si maxim 15 caractere')
            return false;
        }

        return true
    }

    function fctSignUp() {
        if (validate()) {
            // TO DO
            alert('Corect')
        }
    }

    return (
        <div>
            <Header name={'Sign Up'} />

            <h1 id="h1Sign">Completati formularul:</h1>
            <div id='divSignUp'>
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
            </div>

            <input type="button" value="Sign up" id="btnSignUp" onClick={fctSignUp} />

        </div>
    );
}

export default SignUp;