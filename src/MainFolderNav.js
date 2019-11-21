import React from 'react';
import { NavLink } from 'react-router-dom';
import DummyContext from './DummyContext';
import PropTypes from 'prop-types';
import './MainFolderNav.css';


class MainFolderNav extends React.Component {

    static contextType = DummyContext;

    ///////////This function throws an error if the value in context of fetchError is true/////////////
    checkForError = () => {
                if (this.context.fetchError === true) {
                    throw new Error ('Could not fetch folders from server')
                }
            }

    render() {

        const selectedFolders = this.context.folders.map(folder => folder.name)
        const folderList = selectedFolders.map((folder, index) => {
            const path = `/folder/${folder}`
            return(
                <NavLink to={path}
                key={index}
                className='navLink'
                activeClassName='navLinkActive'
                >{folder}
                </NavLink>            
            )
        }) 

        return(
            <section className='navBar'>
                <ul className='folderCardList'>
                    {folderList}
                    <NavLink to='/addfolder' className='buttonLink'>Add Folder</NavLink>
                    {this.checkForError()}
                </ul>
            </section>
        )
    
    }
}

MainFolderNav.propTypes = {
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

export default MainFolderNav;