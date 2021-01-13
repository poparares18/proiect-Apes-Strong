const Sequelize = require("sequelize");

//database, username, password si option
const sequelize = new Sequelize('monkeys', 'root', 'telefon', {
    dialect: "mysql",
    host: "localhost"
})

sequelize.authenticate().then(() => {
    console.log("Connected to database")
}).catch((err) => {
    console.log(err)
    console.log("Unable to connect to database")
})


const Users = sequelize.define('users', {
    username: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING,
    nume: Sequelize.STRING,
    prenume: Sequelize.STRING
})

const Courses = sequelize.define('courses', {
    numeMaterie: Sequelize.STRING,
    usernameFK: Sequelize.STRING
})

const Notes = sequelize.define('notes', {
    numeNotita: Sequelize.STRING,
   // numeMaterieFK: Sequelize.STRING,
    usernameFK:Sequelize.STRING
})
const EditareNotite = sequelize.define('editareNotite', {
    numeNotitaFK: Sequelize.STRING,
    continut:Sequelize.STRING
})
module.exports = { Users, Courses, Notes, EditareNotite};