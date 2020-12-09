const { User } = require("../models/tables");

const user = {
    create: async user => {
        try {
            return await User.create(user);
        } catch (err) {
            console.log(err);
            return false;
        }
    },
}

module.exports = user;
