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


const deleteCourse = async (request, response) => {

    Courses.findByPk(request.params.id).then((course) => {
        if (course) {
            course.destroy().then((result) => {
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

const editCourse = async (request, response) => {
    Courses.findByPk(request.params.id).then((course) => {
        if (course) {
            course.update(request.body)
        }
    })
}

module.exports = { createCourse, getCourses, deleteCourse, editCourse }