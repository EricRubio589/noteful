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
            </ul>
        </section>
    )
}

export default MainFolderNav;