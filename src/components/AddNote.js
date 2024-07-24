import React, { useContext, useState } from 'react'
import noteContext from '../context/notes/noteContext';

export default function AddNote(props) {
    const context = useContext(noteContext);
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" });

    const handleOnClick = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" });
        props.showAlert('Note Added Successfully', 'success');
    }

    const handleOnChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value });
    }

    return (
        <div className="container my-3">
            <h1>Add a Note:</h1>
            <form>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="username" name='title' placeholder="Username"
                        value={note.title} aria-describedby="emailHelp" onChange={handleOnChange} minLength={5} required
                        style={{ paddingLeft: '65px' }} />
                    <label htmlFor="username">Username</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="description" name='description' placeholder="Description"
                        value={note.description} onChange={handleOnChange} minLength={5} required
                        style={{ paddingLeft: '65px' }} />
                    <label htmlFor="description">Description</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="tag" name="tag" placeholder="Tag" value={note.tag}
                        onChange={handleOnChange} style={{ paddingLeft: '65px' }} />
                    <label htmlFor="tag" className="form-label">Tag</label>
                </div>
                <div className="mb-3">
                    <small>Length of title and description must be greater 5</small>
                    <br />
                    <button style={{ margin: '10px 0px' }} disabled={note.title.length < 5 || note.description.length < 5} type="submit" className="btn btn-primary" onClick={handleOnClick}>Add Note</button>
                </div>
            </form>
        </div>
    );
}
