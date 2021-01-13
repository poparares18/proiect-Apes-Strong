const { request, response } = require('express')
const { EditareNotite } = require('../models/tables')

const createEditareNotita = async (request, response) => {
    EditareNotite.create(request.body).then((result) => {
        console.log(response.status(201).json(result))
    }).catch((err) => {
        response.status(500).send("resource not created")
    })
}

const getEditareNotita = async (request, response) => {
    EditareNotite.findAll({
        where: {
            numeNotitaFK: request.params.id
        }
    }).then((results) => {
        response.status(200).json(results);
    })
}

const editNotita = async (request, response) => {
    EditareNotite.findByPk(request.params.id).then((editareNotite) => {
        if (editareNotite) {
            editareNotite.update(request.body)
        }
    })
}

module.exports = { createEditareNotita, getEditareNotita, editNotita }