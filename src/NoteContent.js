import React from 'react';
import DummyContext from './DummyContext'
import './NoteContent.css';

class NoteContent extends React.Component {

    static contextType = DummyContext;

    noteItemDelete = (nameOfNote) => {
            this.context.deleteItem(nameOfNote);
            this.props.history.push('/')
        }

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
                    {nameOfNote}
                    <button className='button' onClick={() => this.noteItemDelete(nameOfNote)}>Delete</button> 
                </div>
                <p className='noteModified'>Last modified: {noteModified.split('T')[0]}</p>
                <p className='noteModified'>{noteContent}</p>
                {console.log()}
            </section>
        )

    }
}


export default NoteContent;