import React from 'react'
import { Link } from 'react-router-dom'
import DummyContext from './DummyContext'
import './NoteFolderNav.css'

class NoteFolderNav extends React.Component {
    
    static contextType = DummyContext;

    render() {
        const { noteName } = this.props.match.params
        const matchNote = this.context.notes.find(note => note.name === noteName)
        const data = this.context.folders.find(folder => folder.id === matchNote.folderId)
        
        return(
            <section className='navBar'>
                <ul className='folderCardList'>
                    <Link className='navLink' to={`/folder/${data.name}`}>{data.name}</Link>
                    <li className='folderCard'><button className='addFolderButton'>Add Folder</button></li>
                </ul>
            </section>
        )
    }
        

}

export default NoteFolderNav;