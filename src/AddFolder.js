import React from 'react';
import './AddFolder.css';
import DummyContext from './DummyContext'

class AddFolder extends React.Component {

    static contextType = DummyContext;

    handleSubmit = event => {
        event.preventDefault()
        const { name } = event.target
        const toServer = {
            id: Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 8)+'-ffaf-11e8-8eb2-f2801f1b9fd1',
            name: name.value
        }
        fetch(`http://localhost:9090/folders`, {
            method: 'POST',
            body: JSON.stringify(toServer),
            headers: {
                'content-type': 'application/json'
            }
            }
        )
        .then(response => {
            if (!response.ok) {
                throw new Error(response.status)
                // return ('There was a problem contacting the server')
            }
            return response.json()
        })
        .then(
            this.context.folders.push({
                id: toServer.id,
                name: toServer.name
            }),
            this.props.history.push('/'))
    }

    render() {

        return(
            <section className='addFolderSection'>
                <h2>Add a folder</h2>
                <form className='form' onSubmit={this.handleSubmit}>
                    <label htmlFor='name'>Name</label>
                    <input type='text' name='name' id='name'></input>
                    <button type='submit'>Add</button>
                </form>
            </section>
        )
    }
}

export default AddFolder;