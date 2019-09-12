import React from 'react';
import './MainFolderNav.css';


function MainFolderNav(props) {

    const folderList = props.folders.map(folder => { 
        return(
        <li className='folderCard'>{folder}</li>
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

export default MainFolderNav;