import React from 'react';
import DummyContext from './DummyContext';
import PropTypes from 'prop-types';
import './NoteContent.css';

class NoteContent extends React.Component {

    static contextType = DummyContext;

    noteItemDelete = (nameOfNote) => {
            this.context.deleteItem(nameOfNote);
            this.props.history.push('/')
        }

    render() {


        const nameFromPath = this.props.match.params.noteName
        const noteObject = this.context.notes.find(note => note.name === nameFromPath)

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
            </section>
        )
    }
}

NoteContent.propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    match: PropTypes.object.isRequired, 
 }
 
 DummyContext.Provider.propTypes ={
     value: PropTypes.shape({
         data: PropTypes.array.isRequired,
         deleteItem: PropTypes.func.isRequired,
         folders: PropTypes.array.isRequired,
         notes: PropTypes.array.isRequired
     })   
 }
 
export default NoteContent;