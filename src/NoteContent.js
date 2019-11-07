import React from 'react';
import DummyContext from './DummyContext'
import './NoteContent.css';

class NoteContent extends React.Component {

    static contextType = DummyContext;

    render() {


        const { noteName } = this.props.match.params
        const noteObject = this.context.notes.find(note => note.name === noteName)

        console.log(this.context)

        const nameOfNote = noteObject.name
        const noteContent = noteObject.content
        const noteModified = noteObject.modified

        return(
            <section className='noteList'>
                <div className='noteCard'>
                    {nameOfNote}<br/><br/> 
                    Last modified: {noteModified}
                </div>
                <p>{noteContent}</p>
                {console.log()}
            </section>
        )

    }
}


export default NoteContent;