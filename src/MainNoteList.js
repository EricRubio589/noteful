import React from 'react';
import { Link } from 'react-router-dom';
import DummyContext from './DummyContext'
import './MainNoteList.css';

class MainNoteList extends React.Component {
    
    static contextType = DummyContext
    
    render() {

        const folderName = (this.props.match.params.folderName) || this.context.folders
        const matchFolder = (this.context.folders.find(folder => folder.name === folderName)) || folderName
        const matchFolder
        const matchNotes = (matchFolder instanceof Array)? this.context.notes.filter(note => note.folderId === matchFolder.id) : 
            this.context.notes.filter(note => )

        // const noteList = notes.forEach(note => matchFolder.forEach(folder => {
        //     if (note.folderId === folder.id) {
        //         const path = `/note/${note.name}`
        //         return (
        //             <li className='noteCard'><Link to={path}>{note.name}</Link></li>
        //             ) 
        //     }
        //     })
        // )

        const noteList = matchNotes.map(note => {
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
                {console.log(matchFolder)}   
            </section>
        ) 
    }   
}

export default MainNoteList;