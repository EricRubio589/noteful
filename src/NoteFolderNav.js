import React from 'react';
import { Link } from 'react-router-dom';
import DummyContext from './DummyContext';
import PropTypes from 'prop-types';
import './NoteFolderNav.css';

class NoteFolderNav extends React.Component {
    
    static contextType = DummyContext;

    render() {

        const { noteName } = this.props.match.params
        const matchNote = this.context.notes.find(note => note.name === noteName)
        const data = this.context.folders.find(folder => folder.id === matchNote.folderId)

        console.log(this.context);
        
        return data !== undefined ? (

            <section className='navBar'>
                <ul className='folderCardList'>
                    <Link className='navLink' to={`/folder/${data.name}`}>{data.name}</Link>
                </ul>
            </section>
        ) : 'Loading...'
    }       
}

NoteFolderNav.propTypes = {
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
 

export default NoteFolderNav;