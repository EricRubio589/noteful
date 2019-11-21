import React from 'react';
import './AddNote.css';
import DummyContext from './DummyContext'

class AddNote extends React.Component {

    static contextType = DummyContext;

    handleSubmit = event => {
        event.preventDefault()
        const { noteName, folderName, noteContent } = event.target
        const folderNameString = folderName.value
        const getFolderId = this.context.folders.find(folder => folder.name === folderNameString)
        const folderId = getFolderId.id
        const toServer = {
            id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8)+'-ffaf-11e8-8eb2-f2801f1b9fd1',
            name: noteName.value,
            modified: new Date(),
            folderId: folderId,
            content: noteContent.value
        }
        fetch(`http://localhost:9090/notes`, {
            method: 'POST',
            body: JSON.stringify(toServer),
            headers: {
                'content-type': 'application/json'
            }
            }
        )
        .then(response => {
            if (!response.ok) {
                return ('There was a problem contacting the server')
            }
            return response.json()
        })
        .then(
            this.context.notes.push({
                id: toServer.id,
                name: toServer.name,
                modified: JSON.stringify(new Date()).replace(/"/g, ''),
                folderId: toServer.folderId,
                content: toServer.content
            }),
            this.props.history.push('/'))
    }

    render() {
        ///////We map the folders to show them as options for selection on the form///////////
        const folderOptions = this.context.folders.map((folder, index) => {
            return (
            <option key={index} value={`${folder.name}`}>{folder.name}</option>
            )
        })

        return(
            <section className='addNoteSection'>
                <h2>Add a note</h2>
                <form onSubmit={this.handleSubmit} className='form'>
                    <label>Name</label>
                    <input type='text' name='noteName' id='noteName' required pattern="\S+.*"></input>
                    <label>Folder</label>
                    <select name='folderName' id='folderName'>{folderOptions}</select>
                    <label>Content</label>
                    <textarea rows='5' name='noteContent' id='noteContent' required></textarea>
                    <div className='noteButtonContainer'>
                        <button type='submit'>Add</button>
                        <button onClick={() => this.props.history.push('/')}>Cancel</button>
                    </div>
                </form>
            </section>
        )
    }
}

export default AddNote;