import React from 'react';
import { Link } from 'react-router-dom';
import './MainNoteList.css';

function MainNoteList(props) {
    
    const noteList = props.matchNotes.map(note => {
        const path = `/note/${note.name}`
        return (
            <li className='noteCard'><Link to={path}>{note.name}</Link></li>
        )
    })

    return (
        <section className='noteList'>
            <ul className='noteCardList'>
            {noteList}
            <li className='noteCard'><button className='addNoteButton'>Add Note</button></li>
            </ul>
            {console.log(noteList)}   
        </section>
    )    
}

export default MainNoteList;