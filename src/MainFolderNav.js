import React from 'react';
import { NavLink } from 'react-router-dom';
import DummyContext from './DummyContext';
import PropTypes from 'prop-types';
import './MainFolderNav.css';
import { timeout } from 'q';


class MainFolderNav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            fetchError: false
        }
    }

    static contextType = DummyContext;

    errorTrigger = () => {
            if (this.context.folders === 'undefined') {
                throw new Error (`Something went wrong`)
            }
            }

    render() {

        // const getErrorStatus = this.context.fetchError;
        // if (getErrorStatus === 'true') {
        //     this.setState({fetchError: true})
        // }
        
        // const checkAfterFetch = setTimeout(() => this.errorTrigger, 2000)
        // const checkAfterFetch = this.errorTrigger

        console.log('hello')
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

        if (this.context.folders === 'undefined'){
            console.log('This is an error')
            throw new Error('This is an Error message')
        }

        return(
            <section className='navBar'>
                <ul className='folderCardList'>
                    {folderList}
                    {/* {checkAfterFetch} */}
                    <NavLink to='/addfolder' className='buttonLink'>Add Folder</NavLink>
                    {console.log(this.state.folders)}
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