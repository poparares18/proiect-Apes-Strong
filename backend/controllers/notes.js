const { request, response } = require('express')
const { Notes } = require('../models/tables')

const createNote = async (request, response) => {
    Notes.create(request.body).then((result) => {
        console.log(response.status(201).json(result))
    }).catch((err) => {
        response.status(500).send("resource not created")
    })
}

const getNotes = async (request, response) => {
    Notes.findAll({
        where: {
            courseFK: request.params.id,
           // numeMaterieFK:request.params.id
        }
    }).then((results) => {
        response.status(200).json(results);
    })
}

const getEditareContinut = async (request, response) => {
    Notes.findAll({
        where: {
            id: request.params.id,
           // numeMaterieFK:request.params.id
        }
    }).then((results) => {
        response.status(200).json(results);
    })
}

const deleteNote = async (request, response) => {
    Notes.findByPk(request.params.id).then((note) => {
        if (note) {
            note.destroy().then((result) => {
                response.status(204).send()
            }).catch((err) => {
                console.log(err)
                response.status(500).send('database error')
            })
        } else {
            response.status(404).send('resource not found')
        }
    }).catch((err) => {
        console.log(err)
        response.status(500).send('database error')
    })
}

const editNote = async (request, response) => {
    Notes.findByPk(request.params.id).then((note) => {
        if (note) {
            note.update(request.body)
        }
    })
}

const updateNoteContent = async (request, response) => {
    Notes.findByPk(request.params.id).then((note) => {
        if (note) {
            note.update(request.body)
        }
    })
}

const getNote = async (request, response) => {
    Notes.findByPk(request.params.id).then((note) => {
        response.status(200).json(note);
    }).catch((err) => {
        console.log(err)
        response.status(500).send('database error')
    })
}


module.exports = { createNote, getNotes, deleteNote, editNote, updateNoteContent, getNote, getEditareContinut }