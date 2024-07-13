import { type } from '@testing-library/user-event/dist/type';
import mongoose from 'mongoose';
const { Schema } = mongoose;

const NotesSchema = new Schema({
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