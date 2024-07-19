import React, { useState } from 'react';
import NoteContext from './noteContext';

const NoteState = (props) => {
    const host = 'http://localhost:5000';
    const notesInitial = []

    const [notes, setNotes] = useState(notesInitial);

    // Get All Notes
    const getNotes = async () => {
        // API Call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjY5MzcxZTZhNzY4MzZkMzkwNjJjMTZkIn0sImlhdCI6MTcyMTAxNTMzNX0.rlV4_zVH2becqpHo0EzfHrLn85G1cirl_97OP9WFDb0"
            }
        });
        const json = await response.json();
        console.log(json)
        setNotes(json)
    };

    // Add a Note
    const addNote = async (title, description, tag) => {
        // API Call
        // 'Accept':'application/json'

        console.log('Adding a new Note');
        const note = {
            "_id": "6694affae7d867becb381833added",
            "user": "669371e6a76836d39062c16d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-07-15T05:13:30.205Z",
            "__v": 0
        };

        setNotes(notes.concat(note));
    };

    // Delete Note
    const deleteNote = async (id) => {
        // API Call
        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjEzMWRjNWUzZTQwMzdjZDQ3MzRhMDY2In0sImlhdCI6MTYzMDY2OTU5Nn0.hJS0hx6I7ROugkqjL2CjrJuefA3pJi-IU5yGUbRHI4Q"
            }
        });
        const json = response.json();
        console.log(json)

        console.log('Delete Note using id ' + id);
        const newNotes = notes.filter((note) => {
            return note._id !== id;
        });
        setNotes(newNotes);
    };

    // Edit Note
    const editNote = async (id, title, description, tag) => {
        // API Call

        // Logic to Edit Note
        const newNotes = notes.map(note => {
            if (note._id === id) {
                note.title = title;
                note.description = description;
                note.tag = tag;
            }
            return note;
        });

        setNotes(newNotes);
    };

    return (
        <NoteContext.Provider value={{ notes, getNotes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};

export default NoteState;
