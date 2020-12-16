const { request, response } = require('express')
const { Courses } = require('../models/tables')

const createCourse = async (request, response) => {
    Courses.create(request.body).then((result) => {
        console.log(response.status(201).json(result))
    }).catch((err) => {
        response.status(500).send("resource not created")
    })
}

const getCourses = async (request, response) => {
    Courses.findAll({
        where: {
            usernameFK: request.params.id
          }
    }).then((results) => {
        response.status(200).json(results);
    })
    // Courses.findAll().then((results) => {
    //     response.status(200).json(results);
    // })
}


module.exports = { createCourse, getCourses }