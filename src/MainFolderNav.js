import React from 'react';
import { NavLink } from 'react-router-dom'
import './MainFolderNav.css';


function MainFolderNav(props) {

    const selectedFolders = props.data.map(folder => folder.name)

    const folderList = selectedFolders.map(folder => {
        const path = `/folder/${folder}`
        console.log(selectedFolders)
        return(
            <NavLink to={path}
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
                <li className='folderCard'><button className='addFolderButton'>Add Folder</button></li>
            </ul>
        </section>
    )
    
}



MainFolderNav.defaultProps = {
    folders: []
}

export default MainFolderNav;