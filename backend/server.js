const express = require('express')
const { Users } = require('./models/tables')
const app = express()

Users.sync().then(()=>{
    console.log("Tabel creat")
})

app.listen(8080)