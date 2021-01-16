import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../pagesStyle/EditareNotita.css';
import { convertToHTML } from 'draft-convert';
import {
  useParams
} from "react-router-dom";


const EditareNotita = () => {

  let { id } = useParams();
  let { continut } = useParams();

  const [editorState, setEditorState] = useState(
    () => EditorState.createWithContent(convertFromRaw(JSON.parse(continut))),
  );

  const [data, setData] = useState([]);

  async function preluareContinut() {
    let url = 'http://localhost:3001/getNote' + `/${id}`
    let response = await fetch(url, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        'accept': 'application/json'
      }
    })
    let res = await response.json()
    setData(res);
    console.log(convertFromRaw(JSON.parse(res.continutNotita)));
    console.log(res);
  }

  useEffect(() => {
    preluareContinut();
    //setTimeout(editorStateFunction(), 100);
    //console.log(editorState.getCurrentContent());
  }, []);

  // function editorStateFunction() {
  //   const state = data.continutNotita
  //   ? EditorState.createWithContent(convertFromRaw(JSON.parse(data.continutNotita)))
  //   : EditorState.createEmpty();
  //   setEditorState(state);
  // }

  // const [editorState, setEditorState] = useState(
  //   () =>{ if(data.continutNotita){

  //     editorState.createWithContent(convertFromRaw(JSON.parse(data.continutNotita)))
  //   } 
  //   else {
  //     EditorState.createEmpty()
  //   }
  // }
  // );

  const [convertedContent, setConvertedContent] = useState(null);
  const handleEditorChange = (state) => {
    setEditorState(state);
    convertContentToHTML();
  }
  const convertContentToHTML = () => {
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  }

  async function onClickSaveContent() {
    console.log(editorState.getCurrentContent());
    // Convertire
    let continutNotita = JSON.stringify(convertToRaw(editorState.getCurrentContent()));
    
    console.log(continutNotita);
    // console.log(convertFromRaw(JSON.parse(continutNotita)));


    //const idNotita = 2;
    // const idCurs = props.idCurs;
    let url = 'http://localhost:3001/updateNoteContent' + `/${id}`

    let notitaNoua = {
      numeNotita: data.numeNotita,
      courseFK: data.courseFK,
      continutNotita: continutNotita
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
    <div className="EditareNotita">
      <header className="EditareNotita-header">
        Rich Text Editor Example
        </header>
      <Editor
        defaultEditorState={editorState}
        onEditorStateChange={handleEditorChange}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />

      {console.log('data', data)}
      {console.log('data', data.continutNotita)}
      <button id="btnSave" onClick={onClickSaveContent}>Save</button>
    </div>
  )

}

export default EditareNotita;