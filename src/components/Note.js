import React, { useContext } from 'react'
import noteContext from '../context/notes/noteContext';
import NoteItem from "./NoteItem";

export default function Home() {
    const context = useContext(noteContext);
    const { notes, setNotes } = context;
    return (
        <div className="container">
            <h1>Your Notes:</h1>
            <div className="row my-3">
                {notes.map((note) => {
                    return <NoteItem key={note._id} note={note} />
                })}
            </div>
        </div>

    );
}
