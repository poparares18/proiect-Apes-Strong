import React, { useState, useContext } from 'react';
import imgDelete from './pages/imagini/delete.png';
import { Link, useHistory } from "react-router-dom";
import imgEdit from './pages/imagini/edit.svg';

function Notita(props) {

    let history = useHistory();

    async function stergereNotita() {
        const id = props.id;
        let url = 'http://localhost:3001/deleteNote' + `/${id}`
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

    function goToEditare() {
        history.push("/editare-notita");
    }

    return (
        <div className={'wrapper-notita'}>
            <Link to={`/editare-notita`}><span >{props.name}</span></Link>
            <button id="delete" onClick={stergereNotita} ><img src={imgDelete} width='50px' height='50px' /></button>
            <button id='edit' onClick={editareNotita} ><img src={imgEdit} width='50px' height='50px' /></button>
        </div>
    );
}

export default Notita;