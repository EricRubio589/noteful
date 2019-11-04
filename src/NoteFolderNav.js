import React from 'react'
import { Link } from 'react-router-dom'
import './NoteFolderNav.css'

function NoteFolderNav(props) {
    
    return(
        <section className='navBar'>
            <ul className='folderCardList'>
                <Link className='navLink' to={`/folder/${props.data.name}`}>{props.data.name}</Link>
                <li className='folderCard'><button className='addFolderButton'>Add Folder</button></li>
            </ul>
        </section>
    )
        

}

export default NoteFolderNav;