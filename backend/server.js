const express = require('express')
const app = express()

app.use('/abc', express.static('../frontend2'))

app.listen(8080)
