const { response } = require('express')
const express = require('express')
const { Users } = require('./models/tables')
const { createUser,getAllUser } = require('./controllers/user')
const app = express()


app.use(express.json());
app.use(express.urlencoded());

Users.sync().then(() => {
    console.log("Tabel creat")
})

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin ? req.headers.origin : "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
    next();
});



app.post("/signup", createUser)
app.get("/getAllUsers", getAllUser)

app.listen(3001)