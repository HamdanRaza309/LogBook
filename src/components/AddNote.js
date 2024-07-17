import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

export default function AddNote() {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tage: 'default' })
    const handleOnClick = (e) => {
        e.preventDefault()
        addNote(note.title, note.description, note.tag)
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
                    <input type="text" className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={handleOnChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input type="text" className="form-control" id="description" name='description' onChange={handleOnChange} />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={handleOnChange} />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleOnClick}>Submit</button>
            </form>
        </div>
    )
}
