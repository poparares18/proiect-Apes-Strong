import React, { useState } from 'react';
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../pagesStyle/EditareNotita.css';
import { convertToHTML } from 'draft-convert';

const EditareNotita = () => {


  const [editorState, setEditorState] = useState(
    () => EditorState.createEmpty(),
  );

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


    const idNotita = 2;
    // const idCurs = props.idCurs;
    let url = 'http://localhost:3001/updateNoteContent' + `/${idNotita}`

    let notitaNoua = {
      numeNotita: "curs2",
      courseFK: 61,
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

      <button id="btnSave" onClick={onClickSaveContent}>Save</button>
    </div>
  )

}

export default EditareNotita;