import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import MainFolderNav from './MainFolderNav';
import MainNoteList from './MainNoteList';
import NoteContent from './NoteContent';
import NoteFolderNav from './NoteFolderNav';
import dummyStore from './dummy-store';
import DummyContext from './DummyContext'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyStore,
      folders: dummyStore.folders,
      notes: dummyStore.notes,
      deleteItem: () => {}
    }
  }

  
  componentDidMount() {
    const url = `http://localhost:9090/`
    Promise.all([
      fetch(`${url}folders`),
      fetch(`${url}notes`)
    ])
    .then(([responseFolders, responseNotes]) => {
      if (!responseFolders.ok) {
        throw new Error('Oops, there seems to be a problem fetching folders from the server')
      }
      if (!responseNotes.ok) {
        throw new Error('Oops, there seems to be a problem fetching notes from the server')
      }
      return Promise.all([responseFolders.json(), responseNotes.json()]);
    })
    .then(([responseFolders, responseNotes]) => {
      this.setState({
        folders: responseFolders,
        notes: responseNotes,
        deleteItem: this.handleDeleteClick
      })
    })
  }
  
  handleDeleteClick = (noteToDelete) =>  {
    this.setState({
      notes: this.state.notes.filter(note => note.name !== noteToDelete),
    })
  }

  render() {
    
    return (
      <div>
        <header className="headerStyle"><Link className='headerLink' to='/'>Noteful</Link></header>
        <body className='body'>
          <DummyContext.Provider value={this.state}>
            <sidebar className='sidebar'>
              <Route exact path ='/' component={MainFolderNav}/>
              <Route path ='/folder' component={MainFolderNav}/>
              <Route path ='/note/:noteName' component={NoteFolderNav}/>
            </sidebar>
            <main className ='main'>
              <Route exact path ='/' component={MainNoteList}/>
              <Route exact path ='/folder/:folderName' component={MainNoteList}/>
              <Route exact path ='/note/:noteName' component={NoteContent}/>
            </main>
          </DummyContext.Provider>
            {console.log()}
        </body>
      </div>
    );
  }
}

export default App;