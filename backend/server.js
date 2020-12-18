const { response } = require('express')
const express = require('express')
const { Users, Courses } = require('./models/tables')
const { createUser, getAllUser } = require('./controllers/user')
const { createCourse, getCourses, deleteCourse, editCourse } = require('./controllers/courses')
const app = express()


app.use(express.json());
app.use(express.urlencoded());

Users.sync().then(() => {
    console.log("Tabel USERS creat");
})
Courses.sync().then(() => {
    console.log("Tabel COURSES creat");
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin ? req.headers.origin : "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next();
});



// USERS
app.post("/signup", createUser)
app.get("/getAllUsers", getAllUser)

// COURSES
app.post('/createCourse', createCourse);
app.get('/getCourses/:id', getCourses);
app.delete('/deleteCourse/:id', deleteCourse);
app.put('/editCourse/:id', editCourse);

app.listen(3001)