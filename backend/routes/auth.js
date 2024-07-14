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

        // Generate Java Web Token, as the user signUp he will receive authToken
        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken)
        // Display authToken in json format
        res.json({ authToken: authToken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
});


// Creating a User using: POST "/api/auth/login". No login require 
router.post('/login', [
    // validations
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password can not be blank').exists(),
], async (req, res) => {
    // If there are errors, return bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    // Destructuring
    const { email, password } = req.body;
    try {
        // checks if user exists in database or not
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Please try to login with correct credentials' })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ error: 'Please try to login with correct credentials' })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        // console.log(data.user)

        // Generate Java Web Token, as the user signUp he will receive authToken
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
