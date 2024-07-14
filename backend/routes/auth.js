const express = require('express');
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();

const JWT_SECRET = "hamdanrazaisalsokhanarman"

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
        // Password Security: Generating Hash with Salt
        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(req.body.password, salt);

        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: securePassword,
        })

        const data = {
            user: {
                id: user.id
            }
        }
        // console.log(data.user)

        // Generate Java Web Token
        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken)
        // Display authToken in json format
        res.json({ authToken: authToken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
});

module.exports = router;
