import React from 'react';
import { Link } from 'react-router-dom';
import DummyContext from './DummyContext'
import './MainNoteList.css';

class MainNoteList extends React.Component {
    
    static contextType = DummyContext
    
    render() {

////////////// This logic helps to handle the data depending if we are getting the route prop or not /////////////
        const matchFolder = (this.context.folders.find(folder => folder.name === this.props.match.params.folderName))
        const matchNotes = (typeof matchFolder === 'undefined') ?
            (this.context.notes) :
            (this.context.notes.filter(note => note.folderId === matchFolder.id))

        const noteList = matchNotes.map(note => {
        const path = `/note/${note.name}`
        return (
            <li className='noteCard'>
                <Link className='link' to={path}>{note.name}</Link>
                <button className='button' onClick={() => this.context.deleteItem(note.name)}>Delete</button>
                {/*///////////////// Here I used a split to show only the relevant part of the last modified date///////////////*/}
                <p className='modified'>Last modified:{note.modified.split('T')[0]}</p></li>
            )
        })   

        return (
            <section className='noteList'>
                <ul className='noteCardList'>
                {noteList}
                <li className='noteCard'><button className='addNoteButton'>Add Note</button></li>
                </ul>
                {console.log(matchFolder)}   
            </section>
        ) 
    }   
}

export default MainNoteList;