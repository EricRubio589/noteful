import React from 'react';
import { NavLink } from 'react-router-dom'
import DummyContext from './DummyContext'
import './MainFolderNav.css';


class MainFolderNav extends React.Component {

    static contextType = DummyContext;

    render() {

    const selectedFolders = this.context.folders.map(folder => folder.name)
    const folderList = selectedFolders.map(folder => {
        const path = `/folder/${folder}`
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
}


// MainFolderNav.defaultProps = {
//     folders: []
// }

export default MainFolderNav;