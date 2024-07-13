const express = require('express');
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const router = express.Router();

// Creating a User using: POST "/api/auth/". Does not require Auth
router.post('/', [
    body('name', 'Enter a valid Name').isLength({ min: 5 }),
    body('email', 'Enter a valid Email').isEmail(),
    body('password', 'Enter a valid Password').isLength({ min: 5 }),
], (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    })
        .then(user => res.json(user))
        .catch(err => {
            console.error(err.message);
            res.status(409).send("Enter Unique value for Email");
        });
});

module.exports = router;
