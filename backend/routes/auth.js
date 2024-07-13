const express = require('express');
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Creating a User using: POST "/api/auth/createuser". No login require 
router.post('/createuser', [
    // validations
    body('name', 'Enter a valid Name').isLength({ min: 5 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a valid Password').isLength({ min: 5 }),
], async (req, res) => {
    // If there are errors, return bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        // Check whether the user with this email exists already 
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send("Sorry a user with this email already exists")
        }

        // Create a new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        // Display userData in json format
        res.json(user)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
});

module.exports = router;
