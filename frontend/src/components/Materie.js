import React, { useState, useContext } from 'react';
import imgDelete from './pages/imagini/delete.png'

function Materie(props) {

    async function stergereMaterie() {
        const id = props.id;
        let url = 'http://localhost:3001/deleteCourse' + `/${id}`
        await fetch(url, {
            method: 'DELETE',
        })
    }

    async function editareMaterie() {
        const id = props.id;
        let url = 'http://localhost:3001/editCourse' + `/${id}`
        let materieNoua = {
            numeMaterie: 'Religie <3',
            usernameFK: "Blexer24"
        }
        await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(materieNoua),

            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            }
        })
    }


    return (
        <div className={'wrapper-materie'}>
            <span>{props.name}</span>
            <button id="delete" onClick={stergereMaterie} ><img src={imgDelete} width='50px' height='50px' /></button>
            <button id='edit' onClick={editareMaterie} >Edit</button>
        </div>
    );
}

export default Materie;