// for chatGPT: explain above three routes and what is the purpose of jwt in all , answer must be precise and concise 

const express = require('express');
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');

const JWT_SECRET = "hamdanrazaisalsokhanarman";

// ROUTE 1: Creating a User using: POST "/api/auth/createuser". No login require 
// PURPOSE: After you sign up, the website gives you a JWT token. This token will be used to identify you in future requests.
router.post('/createuser', [
    // validations
    body('name', 'Enter a valid Name').isLength({ min: 5 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a valid Password').isLength({ min: 5 }),
], async (req, res) => {
    let success = false

    // If there are errors, return bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }

    try {
        // Check whether the user with this email exists already 
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).send({ success, error: "Sorry a user with this email already exists" })
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
        success = true
        res.json({ success, authToken: authToken })
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
});

// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login require 
// PURPOSE: After you log in, the website gives you a JWT token. This token will be used to identify you in future requests.
router.post('/login', [
    // validations
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Password can not be blank').exists(),
], async (req, res) => {
    let success = false
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
            return res.status(400).json({ success, error: 'Please try to login with correct credentials' })
        }

        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ success, error: 'Please try to login with correct credentials' })
        }

        const data = {
            user: {
                id: user.id
            }
        }
        // console.log(data.user)

        const authToken = jwt.sign(data, JWT_SECRET);
        // console.log(authToken)
        // Display authToken in json format
        success = true
        res.json({ success, authToken: authToken })

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
});

// ROUTE 3: Get loggedin User details using: "/api/auth/getuser". Login require 
// PURPOSE: You send the JWT token with your request to get your profile info. The website checks the token to make sure it's really you.
router.post('/getuser', fetchuser, async (req, res) => {
    // If there are errors, return bad requests and the errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    try {
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        res.json(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
});
module.exports = router;
