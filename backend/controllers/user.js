const { request, response } = require('express')
const { Users } = require('../models/tables')

const createUser = async (request, response) => {
    Users.create(request.body).then((result) => {
        console.log(response.status(201).json(result))
    }).catch((err) => {
        response.status(500).send("resource not created")
    })
}

const getAllUser = async (request, response) => {
    Users.findAll().then((results) => {
        response.status(200).json(results);
    })
}

module.exports = { createUser, getAllUser }
