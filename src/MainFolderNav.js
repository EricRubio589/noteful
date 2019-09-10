import React from 'react';
import './MainFolderNav.css';


function MainFolderNav(props) {

    const folderList = props.folders.map(folder => { 
        return(
        <li>{folder}</li>
        )
    })

    return(
        <section className='navBar'>
            <ul>
                {folderList}
            </ul>
        </section>
    )
}

export default MainFolderNav;