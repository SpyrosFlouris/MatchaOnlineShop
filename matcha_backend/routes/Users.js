const express = require('express')
const router = express.Router()
const { Users } = require("../models")
const bcrypt = require('bcrypt');

router.get("/", async (req, res) => {
    const listOfUsers = await Users.findAll()
    res.json(listOfUsers)
})

router.post("/", async (req, res) => {
    const { username, password, email } = req.body;

    // Check if the username already exists
    const existingUser = await Users.findOne({
        where: { username: username }
    });

    if (existingUser) {
        return res.status(400).json({ error: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Proceed with user creation if the username is unique
    try {
        await Users.create({
            username: username,
            password: hashedPassword,
            email: email,
        });
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});  

module.exports = router