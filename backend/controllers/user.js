const userService = require("../config/user");

const createUser = async (req, res) => {
    const user = req.body;
    if (true) {
        const result = await userService.create(user);
        if (result) {
            res.status(201).send({
                message: "User created successfully"
            });
        } else {
            res.status(400).send({
                message: "Error occurred while trying to create the user"
            });
        }
    } else {
        res.status(400).send({
            message: "Invalid user"
        });
    }
};