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

// ROUTE 2: Add new note using: POST "/api/auth/addnote". Login require
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

// ROUTE 3: Update an existing note using: PUT "/api/notes/updatenote/:id". Login require
router.put('/updatenote/:id', fetchuser, async (req, res) => {

    try {
        const { title, description, tag } = req.body;

        // Create newNote Object
        const newNote = {};
        if (title) { newNote.title = title };
        if (description) { newNote.description = description };
        if (tag) { newNote.tag = tag };

        // Find the Note to be updated and update it
        // Finds note with given id
        let note = await Note.findById(req.params.id);

        // Checks if note is available in database
        if (!note) { return res.status(404).send('Not Found') }
        // Checks if the notes belongs to the loggedin user
        if (note.user.toString() !== req.user.id) { return res.status(401).send('Unauthorize access not allowed') }

        // Update the existing note with given id with the newNote note
        note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true })
        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
})


// ROUTE 4: Delete an existing note using: Delete "/api/notes/deletenote/:id". Login require
router.delete('/deletenote/:id', fetchuser, async (req, res) => {

    try {

        // Find the Note to be deleted and delete it
        // Finds note with given id
        let note = await Note.findById(req.params.id);

        // Checks if note is available in database
        if (!note) { return res.status(404).send('Not Found') }
        // Checks if the notes belongs to the loggedin user
        if (note.user.toString() !== req.user.id) { return res.status(401).send('Unauthorize access not allowed') }

        // Delete the existing note with given id with the newNote note
        note = await Note.findByIdAndDelete(req.params.id);
        res.json(note);

    } catch (error) {
        console.error(error.message);
        res.status(500).send('Some Error occured')
    }
})
module.exports = router;