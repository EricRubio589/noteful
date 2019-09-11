import React from 'react';
import './MainNoteList.css';

function MainNoteList(props) {

    const notesList = props.notes.map(note => {
        return (
            <li className='noteCard'>{note}</li>
        )
    })

    return (
        <section className='noteList'>
            <ul className='noteCardList'>{notesList}</ul>
        </section>
    )    
}

export default MainNoteList;