import React, { useState, useContext } from 'react';
import imgDelete from './pages/imagini/delete.png';
import imgEdit from './pages/imagini/edit.svg';
import { Link } from "react-router-dom";

function Materie(props) {

    let nume = props.name;
    const [state, setState] = useState();

    async function stergereMaterie() {
        const id = props.id;
        let url = 'http://localhost:3001/deleteCourse' + `/${id}`;

        let div = document.querySelector(`#div${id}`);
        div.remove();

        await fetch(url, {
            method: 'DELETE',
        })
    }

    async function editareMaterie(idPrimit) {
        const id = props.id;
        let url = 'http://localhost:3001/editCourse' + `/${id}`
        let materie = window.prompt("Noul nume al materie este:", 'noul nume');

        if (!(materie === null || materie === "")) {



            let materieNoua = {
                numeMaterie: materie,
                usernameFK: props.username
            }

            let span = document.querySelector(`#span${id}`);
            span.innerHTML = materie;

            await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(materieNoua),

                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json'
                }
            })
        }
    }


    return (
        <div id={`div${props.id}`} className={'wrapper-materie'}>
            <Link to={`/${props.id}`}><span id={`span${props.id}`}>{nume}</span> </Link>
            <button id="delete" onClick={stergereMaterie} ><img src={imgDelete} width='50px' height='50px' /></button>
            <button id='edit' onClick={editareMaterie}><img src={imgEdit} width='50px' height='50px' /></button>
        </div>
    );
}

export default Materie;