const Sequelize = require("sequelize");

//database, username, password si option
const sequelize = new Sequelize('monkeys', 'root', 'alex1234', {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
    console.log("Unable to connect to database")
})


const Users = sequelize.define('users',{
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    nume: Sequelize.STRING,
    prenume: Sequelize.STRING
})

module.exports = {Users};