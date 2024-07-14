const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({

    user: {
        // The user field establishes a relationship between the notes and the user who created them. This way, each note can be linked back to a specific user.
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        default: "General"
    },
    tag: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('notes', NotesSchema)