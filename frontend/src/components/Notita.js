import React, { useState, useContext } from 'react';
import imgDelete from './pages/imagini/delete.png';
import { Link, useHistory } from "react-router-dom";
import imgEdit from './pages/imagini/edit.svg';
import imgShare from './pages/imagini/share.svg';
import { UserContext } from '../context';
import { ContinutContext } from '../contextContinut';

function Notita(props) {

    let history = useHistory();
    const { user, setUser } = useContext(UserContext);
    const { continut, setContinut } = useContext(ContinutContext);

    async function stergereNotita() {
        const id = props.id;
        let url = 'http://localhost:3001/deleteNote' + `/${id}`

        
        let div = document.querySelector(`#div${id}`);
        div.remove();

        await fetch(url, {
            method: 'DELETE',
        })
    }

    async function editareNotita() {
        const idNotita = props.id;
        const idCurs = props.idCurs;
        let url = 'http://localhost:3001/editNote' + `/${idNotita}`

        let notita = window.prompt("Noul nume al notitei este:", 'noul nume');
        if (!(notita === null || notita === "")) {

            let notitaNoua = {
                numeNotita: notita,
                courseFK: idCurs
            }

            let span = document.querySelector(`#span${props.id}`);
            span.innerHTML = notita;

            await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(notitaNoua),

                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            })
        }
    }

    // Shared notes
    async function shareNotita() {
        // Preluare prompt
        let numeUser = window.prompt("Numele utilizatorului ce va primi notita:", '');
        let gasit = false;

        if (!(numeUser === null || numeUser === "")) {
            let response = await fetch('http://localhost:3001/getAllUsers', {
                method: 'GET',
            })

            let vectUsers = await response.json();
            console.log(vectUsers);

            for (let i = 0; i < vectUsers.length; i++) {
                if (vectUsers[i].username === numeUser) {
                    gasit = true;
                    break;
                }
            }

            if (gasit) {
                alert(`${numeUser} a fost gasit`);

                // Adaugare materie shred in contul altui utilizator
                const materie = {
                    numeMaterie: `Shared from ${user}`,
                    usernameFK: numeUser
                }

                let response = await fetch('http://localhost:3001/createCourse', {
                    method: 'POST',
                    body: JSON.stringify(materie),
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    }
                })

                let materieShared = await response.json();
                console.log(materieShared);

                // Gasire continut notita
                let responseNotitaShared = await fetch('http://localhost:3001/getNote' + `/${props.id}`, {
                    method: 'GET',
                })
    
                let notitaShared = await responseNotitaShared.json();
                console.log(notitaShared);



                // Adaugare notita shred in contul altui utilizator
                const notita = {
                    numeNotita: props.name,
                    courseFK: materieShared.id,
                    continutNotita: notitaShared.continutNotita
                }

                fetch('http://localhost:3001/createNote', {
                    method: 'POST',
                    body: JSON.stringify(notita),
                    headers: {
                        'content-type': 'application/json',
                        'accept': 'application/json'
                    }
                })

            }
            else {
                alert(`Utilizatorul ${numeUser} nu exista!`);
            }
        }
    }

    function onClickNotita(){
        setContinut(props.continutNotita);
    }

    return (
        <div id={`div${props.id}`} className={'wrapper-notita'}>
            <Link to={`/editare-notita/${props.id}`}><span id={`span${props.id}`} onClick={onClickNotita}>{props.name}</span></Link>
            <button id="delete" onClick={stergereNotita} ><img src={imgDelete} width='50px' height='50px' /></button>
            <button id='edit' onClick={editareNotita} ><img src={imgEdit} width='50px' height='50px' /></button>
            <button id='share' onClick={shareNotita} ><img src={imgShare} width='50px' height='50px' /></button>
        </div>
    );
}

export default Notita;