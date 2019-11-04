import React from 'react';
import './NoteContent.css';

function NoteContent(props) {

    const noteName = props.note.name
    const noteContent = props.note.content
    const noteModified = props.note.modified

    return(
        <section className='noteList'>
            <div className='noteCard'>
                {noteName}<br/><br/> 
                Last modified: {noteModified}
            </div>
            <p>{noteContent}</p>
            {console.log()}
        </section>
    )

}

NoteContent.defaultProps = {
    note: []
}

export default NoteContent;