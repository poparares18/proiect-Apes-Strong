import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../context';
import imgDelete from './imagini/delete.png'
import imgAdd from './imagini/add.png'
import imgNote from './imagini/notita.png'
import '../pagesStyle/Materii.css'
import HeaderBurger from '../headers/HeaderBurger';
import Materie from '../Materie';


function Materii() {
  // Declare a new state variable, which we'll call "count"
  const { user, setUser } = useContext(UserContext);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }
  const imgMaterii = document.createElement('img');
  imgMaterii.src = imgNote;



  useEffect(preluareMaterii);

  //window.onload = preluareMateriiDB();

  async function preluareMaterii() {
    const username = user;
    let url = 'http://localhost:3001/getCourses' + `/${username}`;

    let response = await fetch(url, {
      method: 'GET',
    })

    let vect = await response.json()
    //console.log(vect);
    setData(vect)
  }

  async function preluareMateriiDB() {
    //alert('ceva');
    let divPrincipal = document.querySelector('#divMaterii')

    const username = user;
    let url = 'http://localhost:3001/getCourses' + `/${username}`;

    let response = await fetch(url, {
      method: 'GET',
    })

    let vect = await response.json()
    console.log('ASTA E RASP', vect);
    console.log('Div princeipla:', divPrincipal);
    afisareVectorMaterii(vect);
  }


  // ADAUGARE MATERIE************
  function onClickAdaugareMaterie() {

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

      let divMaterii = document.querySelector('#divMaterii');
      divMaterii.append(div);
    })
  }


  function keyDownMaterie(e) {
    if (e.keyCode == 13) {
      let divMaterii = document.querySelector('#divMaterii');

      let div = divMaterii.querySelector('#divTemporat');
      console.log(div);

      let numeMaterie = div.querySelector('input').value;
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
      context.fillText(numeMaterie, canvas.width / 2, canvas.height / 2);

      adaugareMaterieInDB(numeMaterie, user);
      //divMaterii.append(canvas);
    }
  }


  function handleAddMaterii(){

  }


  // Dupa primirea listeti de materii, afisarea ei
  function afisareVectorMaterii(vect) {
    let divMaterii = document.querySelector('#divMaterii');
    for (let i = 0; i < vect.length; i++) {
      imgMaterii.addEventListener('load', () => {
        let canvas = document.createElement('canvas');
        let context = canvas.getContext('2d');
        canvas.width = 300;
        canvas.height = 300;
        context.drawImage(imgMaterii, 0, 0, imgMaterii.width, imgMaterii.height, 0, 0, canvas.width, canvas.height);

        context.fillStyle = 'black';
        context.font = '14pt Tahoma'
        context.textBaseline = 'middle';
        context.textAlign = 'center';
        context.fillText(vect[i].numeMaterie, canvas.width / 2, canvas.height / 2);
        divMaterii.append(canvas);
      })
    }
  }



  // Adaugare in baza de date
  function adaugareMaterieInDB(numeMaterie, numeUtilizator) {
    const materie = {
      numeMaterie: numeMaterie,
      usernameFK: numeUtilizator
    }

    fetch('http://localhost:3001/createCourse', {
      method: 'POST',
      body: JSON.stringify(materie),
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
  }



  return (
    <div >
      <HeaderBurger name={'Materii'} />

      <div id='divMaterii'>
        <input type="text" id="search" onChange={handleChangeSearch} />
        <input type="button" value="Search" />
        <div className={'wrapper-materii'}>
          {data.map((materie, i) => <Materie name={materie.numeMaterie} id={materie.id} key={i} />)}
        </div>
        
        <button id="add" onClick={onClickAdaugareMaterie}><img src={imgAdd} width='100px' height='100px' /></button>
      </div>
    </div>
  );
}

export default Materii;