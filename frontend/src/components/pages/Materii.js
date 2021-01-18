import React, { useState, useContext, useEffect} from 'react';
import { UserContext } from '../../context';
import imgDelete from './imagini/delete.png'
import imgAdd from './imagini/add.png'
import imgNote from './imagini/notita.png'
import '../pagesStyle/Materii.css'
import HeaderBurger from '../headers/HeaderBurger';
import Materie from '../Materie';
import { Link, useHistory } from "react-router-dom";
import Header from '../headers/Header';

function Materii() {
  // Declare a new state variable, which we'll call "count"
  const { user, setUser } = useContext(UserContext);
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);

  const handleChangeSearch = (e) => {
    setSearch(e.target.value);
  }
  let numeMaterie;
  let history = useHistory();
  const imgMaterii = document.createElement('img');
  imgMaterii.src = imgNote;

  let isSubmit = false;

  useEffect(preluareMaterii, []);
  // useEffect(() => {
  //    isSubmit= true
  //     if (isSubmit) {
  //       preluareMaterii();
  //     }
  //   return () => isSubmit = false
  // }, []);


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
    console.log(vect);
    
  }


  // ADAUGARE MATERIE************
  function onClickAdaugareMaterie() {

    let div = document.createElement('div');
    div.id = 'divTemporat'
    let img = document.createElement('img');
    let textBox = document.createElement('input');

    img.src = imgNote;
    img.addEventListener('load', e => {

      textBox.type = Text;
      textBox.addEventListener('keydown', keyDownMaterie);

      div.append(textBox);

      let divMaterii = document.querySelector('#divMaterii');
      divMaterii.append(div);
    })
  }


  async function keyDownMaterie(e) {
    if (e.keyCode === 13) {
      
      let divMaterii = document.querySelector('#divMaterii');

      let div = divMaterii.querySelector('#divTemporat');
      console.log(div);

      numeMaterie = div.querySelector('input').value;
      let img = div.querySelector('img');
      div.remove();

      adaugareMaterieInDB(numeMaterie, user);
      
      setTimeout(()=>preluareMaterii(), 10);
      setTimeout(()=>preluareMaterii(), 10);
      //await preluareMaterii();
      //divMaterii.append(canvas);
      }
    
  }


  function handleAddMaterii(){

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

function goToNotite(materie){
  history.push({ 
    pathname: '/notite',
    //data: "religie"
   });

}

  return (
    <div >
      <Header name={'Materii'} />

      <div id='divMaterii'>
       
        <div className={'wrapper-materii'}>
          {data.map((materie, i) => <Materie name={materie.numeMaterie} id={materie.id} username={materie.usernameFK} key={i} />)}
          
        </div>
        <button id="add" onClick={onClickAdaugareMaterie}><img src={imgAdd} width='100px' height='100px' /></button>
      </div>
    </div>
  );
}

export default Materii;
