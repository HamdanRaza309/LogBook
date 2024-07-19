import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })
    const handleOnClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
        setNote({ title: "", description: "", tag: "" })
    }

    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div className="container my-3">
            <h1>Add a Note:</h1>
            <form>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name='title' value={note.title} aria-describedby="emailHelp" onChange={handleOnChange} minLength={5} required />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name='description' value={note.description} onChange={handleOnChange} minLength={5} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="tag" className="form-label">Tag</label>
                    <input type="text" className="form-control" id="tag" name="tag" value={note.tag} onChange={handleOnChange} />
                </div>
                <small>Length of title and description must be greater 5</small>
                <br />
                <button style={{ margin: '10px 0px' }} disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleOnClick}>Add Note</button>
            </form>
        </div>
    )
}
