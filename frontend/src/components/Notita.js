import React, { useState, useContext } from 'react';
import imgDelete from './pages/imagini/delete.png'

function Notita(props) {

    async function stergereNotita() {
        const id = props.id;
        let url = 'http://localhost:3001/deleteNote' + `/${id}`
        await fetch(url, {
            method: 'DELETE',
        })
    }

    async function editareNotita() {
        const id = props.id;
        let url = 'http://localhost:3001/editNote' + `/${id}`
        let notitaNoua = {
            numeNotita: 'Notita 1',
          //  numeMaterie: 'Religie <3',
            usernameFK: "Blexer24"
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


    return (
        <div className={'wrapper-notite'}>
            <span>{props.name}</span>
            <button id="delete" onClick={stergereNotita} ><img src={imgDelete} width='50px' height='50px' /></button>
            <button id='edit' onClick={editareNotita} >Edit</button>
        </div>
    );
}

export default Notita;