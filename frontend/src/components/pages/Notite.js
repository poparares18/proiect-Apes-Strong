import React, { useState, useContext, useEffect } from 'react';
import {UserContext } from '../../context';
import imgAdd from './imagini/add.png';
import imgNote from './imagini/notita.png';
import Notita from '../Notita';
import '../pagesStyle/Notite.css';
import HeaderBurger from '../headers/HeaderBurger';
import { useHistory } from "react-router-dom";

function Notite() {
const { user, setUser } = useContext(UserContext);
const [data, setData] = useState([]);
const imgMaterii = document.createElement('img');
imgMaterii.src = imgNote;
// let numeMaterie = data;
// console.log(numeMaterie);
let history = useHistory();

let isSubmit = false;

useEffect(preluareNotite);

// useEffect(() => {
//   isSubmit= true
//    if (isSubmit) {
//      preluareNotite();
//    }
//  return () => isSubmit = false
// }, []);

async function preluareNotite() {
  const username = user;
  let url = 'http://localhost:3001/getNotes' + `/${username}`;

  let response = await fetch(url, {
    method: 'GET',
  })

  let vect = await response.json()
  //console.log(vect);
  setData(vect)
}



function onClickNotite() {

    let div = document.createElement('div');
    div.id = 'divTemporat'
    let img = document.createElement('img');
    let canvas = document.createElement('canvas');
    let textBox = document.createElement('input');

    img.src = imgNote;
    img.addEventListener('load', e => {
      let context = canvas.getContext("2d");
      canvas.width = 300;
      canvas.height = 300;

      context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
      canvas.style.border = '3px solid black';

      textBox.type = Text;
      textBox.addEventListener('keydown', keyDownMaterie);

      div.append(textBox);
      div.append(canvas);
      div.append(img);
      img.style.display = 'none';

      let divNotite = document.querySelector('#divNotite');
      divNotite.append(div);
    })
  }

    function keyDownMaterie(e) {
      if (e.keyCode == 13) {
        let divNotite = document.querySelector('#divNotite');
  
        let div = divNotite.querySelector('#divTemporat');
  
        let numeNotita = div.querySelector('input').value;
        let img = div.querySelector('img');
  
        div.remove();
  
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 300;
        context.drawImage(img, 0, 0, img.width, img.height, 0, 0, canvas.width, canvas.height);
  
        context.fillStyle = 'black';
        context.font = '14pt Tahoma'
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        context.fillText(numeNotita, canvas.width / 2, canvas.height / 2);
  
        adaugareNotesInDB(numeNotita, user);
        //divMaterii.append(canvas);
      }
    }

    function gotoEditareNotita(){
      history.push('/editare-notita')
    }

  function adaugareNotesInDB(numeNotita, numeUtilizator) {
    const notita = {
        numeNotita: numeNotita,
      usernameFK: numeUtilizator
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
 

return (
    <div >
      <HeaderBurger name={'Notite'} />

      <div id='divNotite'>
        <div className={'wrapper-notite'} onClick={gotoEditareNotita}>
          {data.map((notita, i) => <Notita name={notita.numeNotita} id={notita.id} key={i} />)}
        </div>
        
        <button id="add" onClick={onClickNotite}><img src={imgAdd} width='100px' height='100px' /></button>
      </div>
    </div>
  );
}

export default Notite;