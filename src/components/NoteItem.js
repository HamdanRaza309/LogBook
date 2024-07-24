import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

const NoteItem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote } = context;
    const { note, updateNote } = props;

    return (
        <div className="col-md-3">
            <div className="card my-3" >
                <div className="card-body">
                    <h5 className="card-title" style={{ color: '#ff9770 ' }} >{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                    <p className="card-text" style={{ fontWeight: 'bold' }} >#{note.tag}</p>
                    <i className="far fa-trash-alt mx-2" onClick={() => {
                        deleteNote(note._id);
                        props.showAlert('Note Deleted Successfully', 'success')
                    }}></i>
                    <i className="far fa-edit mx-2" onClick={() => {
                        updateNote(note);;
                    }}></i>
                </div>
            </div>
        </div>
    );
};

export default NoteItem;
