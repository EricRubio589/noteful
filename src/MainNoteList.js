import React from 'react';
import './MainNoteList.css';

function MainNoteList(props) {

    const notesList = props.notes.map(note => {
        return (
            <li>{note}</li>
        )
    })

    return (
        <section className='noteList'>
            <ul>{notesList}</ul>
        </section>
    )    
}

export default MainNoteList;