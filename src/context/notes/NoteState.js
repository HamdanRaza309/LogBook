import React, { useState } from 'react'
import NoteContext from './noteContext'

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "6694affae7d867becb381833",
            "user": "669371e6a76836d39062c16d",
            "title": "Wakeup",
            "description": "Wakeup in the morning",
            "tag": "wakeup",
            "date": "2024-07-15T05:13:30.205Z",
            "__v": 0
        },
        {
            "_id": "669621375b3dd026483d6992",
            "user": "669371e6a76836d39062c16d",
            "title": "Dinner",
            "description": "Prepare and have dinner",
            "tag": "food",
            "date": "2024-07-16T07:28:55.004Z",
            "__v": 0
        },
        {
            "_id": "669621475b3dd026483d6994",
            "user": "669371e6a76836d39062c16d",
            "title": "Emails",
            "description": "Check and respond to emails",
            "tag": "work",
            "date": "2024-07-16T07:29:11.104Z",
            "__v": 0
        },
        {
            "_id": "669621595b3dd026483d6996",
            "user": "669371e6a76836d39062c16d",
            "title": "Groceries",
            "description": "Buy groceries for the week",
            "tag": "shopping",
            "date": "2024-07-16T07:29:29.449Z",
            "__v": 0
        },
        {
            "_id": "6696215e5b3dd026483d6998",
            "user": "669371e6a76836d39062c16d",
            "title": "Meditate",
            "description": "Meditate for 20 minutes",
            "tag": "health",
            "date": "2024-07-16T07:29:34.034Z",
            "__v": 0
        },
        {
            "_id": "6696216b5b3dd026483d699a",
            "user": "669371e6a76836d39062c16d",
            "title": "Call",
            "description": "Call family in the evening",
            "tag": "personal",
            "date": "2024-07-16T07:29:47.371Z",
            "__v": 0
        },
        {
            "_id": "669621755b3dd026483d699c",
            "user": "669371e6a76836d39062c16d",
            "title": "Code",
            "description": "Work on the React project",
            "tag": "development",
            "date": "2024-07-16T07:29:57.847Z",
            "__v": 0
        },
        {
            "_id": "669621845b3dd026483d699e",
            "user": "669371e6a76836d39062c16d",
            "title": "Read",
            "description": "Read a book for an hour",
            "tag": "leisure",
            "date": "2024-07-16T07:30:12.005Z",
            "__v": 0
        },
        {
            "_id": "669621925b3dd026483d69a0",
            "user": "669371e6a76836d39062c16d",
            "title": "Lunch",
            "description": "Have a healthy lunch",
            "tag": "food",
            "date": "2024-07-16T07:30:26.640Z",
            "__v": 0
        },
        {
            "_id": "6696219c5b3dd026483d69a2",
            "user": "669371e6a76836d39062c16d",
            "title": "Meeting",
            "description": "Project meeting at 10 AM",
            "tag": "work",
            "date": "2024-07-16T07:30:36.947Z",
            "__v": 0
        },
        {
            "_id": "669621a55b3dd026483d69a4",
            "user": "669371e6a76836d39062c16d",
            "title": "Workout",
            "description": "Exercise for 30 minutes",
            "tag": "fitness",
            "date": "2024-07-16T07:30:45.722Z",
            "__v": 0
        }
    ]
    const [notes, setNotes] = useState(notesInitial)

    // Add Note
    const addNote = (title, description, tag) => {
        console.log('Adding a new Note')
        const note = {
            "_id": "6694affae7d867becb381833added",
            "user": "669371e6a76836d39062c16d",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-07-15T05:13:30.205Z",
            "__v": 0
        }

        setNotes(notes.concat(note))
    }

    // Delete Note
    const deleteNote = () => {

    }

    // Edit Note
    const editNote = () => {

    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;