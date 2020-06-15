import React from 'react';
import { Link } from 'react-router-dom';
import { getLoggedUser } from '../../../core/api/users.api';
import { NoteStatus } from './../../../core/api/notes.api';
import './NoteCard.css';

const noteCardStyle = {
    maxWidth: '18rem',
};

const deleteBtnStyles = {
    cursor: 'pointer'
};

export function NoteCard({ note, onDeleteClick }) {
    const loggedUser = getLoggedUser();

    let noteClassByType = "text-white ";
    switch (note.status) {
        case NoteStatus.Active:
            noteClassByType += "status-active";
            break;
        case NoteStatus.Done:
            noteClassByType += "status-success";
            break;
        case NoteStatus.Pending:
            noteClassByType += "status-pending";
            break;
        default:
            noteClassByType += "bg-primary";
            break;
    }

    return (
        // <div className="card m-3 noteClassParent">
        //     <div>Author: {note.authorName}</div>
        //     <div className={noteClassByType} style={noteCardStyle}>

        //         <div className="circle">

        //         </div>
        //     </div>
        //     <div className="card-header">

        //             {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <Link to={`/notes/edit/${note.id}`} > <button className="btn btn-outline-success my-2 my-sm-0 edit-button" type="edit" style={{borderColor: '#3BE2AB', backgroundColor: '#3BE2AB', color: '#FFF', float: 'left'}}>EDIT</button></Link>}
        //             {note.title}

        //         </div>
        //         <div className="card-body">
        //             <p className="card-text">{note.content}</p>
        //         </div>
        //         <div className="card-footer bg-transparent border-secondary">

        //             <div>Created on: {note.date}</div>
        //             {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <span style={deleteBtnStyles} onClick={() => onDeleteClick(note.id)}><button className="btn btn-outline-success my-2 my-sm-0 delete-button" type="delete" style={{borderColor: 'red', backgroundColor: 'red', color: '#FFF', float: 'right'}}>DELETE</button></span>}
        //         </div>
        // </div>
        <div className="shadow-lg todoCardParentClass">
            
            <div className="todoCardHeader">
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <Link to={`/notes/edit/${note.id}`}><img src={require('./../../assets/edit.png')} height="20px" /> </Link>}
                {note.title}
                {(loggedUser.isAdmin || loggedUser.id === note.authorId) && <span style={deleteBtnStyles} onClick={() => onDeleteClick(note.id)}><img src={require('./../../assets/delete.png')} height="20px" /></span>}

            </div>
            <div className="todoCardContent">
                {note.content}
            </div>
            <div className="todoCardFooter">
                <div>Author: {note.authorName}</div>
                <div>Created on: {note.date} </div>
            </div>
            <div className="todoCardStatus">
                <div className="status">Status: </div>
                <div className={noteClassByType} style={noteCardStyle}>
                </div>
            </div>
        </div>
    )
}