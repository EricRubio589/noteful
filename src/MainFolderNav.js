import React from 'react';
import { NavLink } from 'react-router-dom';
import DummyContext from './DummyContext';
import PropTypes from 'prop-types';
import './MainFolderNav.css';
import { timeout } from 'q';


class MainFolderNav extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         fetchError: false
    //     }
    // }

    static contextType = DummyContext;
    
    checkForError = () => {
        console.log(this.context.fetchError)
                if (this.context.fetchError === true) {
                    console.log('error')
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

        // let checkValue = 1
        // const checkValue = this.context.folders.length
        // setTimeout( checkForError, 2000)

        // function checkForError(length) {
        //     if (length < 1) {
        //             console.log('This is an error')
        //             throw new Error('This is an Error message')
        //         }
        // }

        
        

        return(
            <section className='navBar'>
                <ul className='folderCardList'>
                    {folderList}
                    <NavLink to='/addfolder' className='buttonLink'>Add Folder</NavLink>
                    {this.checkForError()}
                    {console.log(this.context.folders)}
                    {console.log(this.context.fetchError)}
                    {/* {console.log(this.context.folders.length)} */}
                    {/* {setTimeout(checkForError(this.context.folders.length),1000)} */}
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