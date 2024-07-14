const express = require('express');
const fetchuser = require('../middleware/fetchuser');
const Note = require("../models/Note");
const { body, validationResult } = require('express-validator');
const router = express.Router();

// ROUTE 1: Get all notes of a User using: GET "/api/auth/fetchtallnotes". Login require
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
        res.send(notes)
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
})

// ROUTE 2: Sdd new note using: POST "/api/auth/addnote". Login require
router.post('/addnote', fetchuser, [
    // validations
    body('title', 'Enter a valid Title').isLength({ min: 3 }),
    body('description', 'Enter a valid Description').isLength({ min: 5 }),
], async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        // If there are errors, return bad requests and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const note = new Note({
            title, description, tag, user: req.user.id
        })

        const savedNote = await note.save();
        res.json(savedNote)

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
})
module.exports = router;