import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import MainFolderNav from './MainFolderNav';
import MainNoteList from './MainNoteList';
import NoteContent from './NoteContent';
import NoteFolderNav from './NoteFolderNav';
// import dummyStore from './dummy-store';
import DummyContext from './DummyContext';
import AddFolder from './AddFolder';
import ErrorCatcher from './ErrorCatcher';
import AddNote from './AddNote';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      folders: [],
      notes: [],
      deleteItem: () => {},
      fetchError: false
    }
  }

  checkForError = (response) => {
      if(response.length < 1) {
          this.setState({fetchError: true})}
          console.log(this.state.folders.length)
    } 
  
  componentDidMount() {
    const url = `http://localhost:9090/`
    Promise.all([
      fetch(`${url}folders`),
      fetch(`${url}notes`)
    ])
    .then(([responseFolders, responseNotes]) => {
      if (!responseFolders.ok) {
        alert('fetch failed')
        this.setState({fetchError: true})
      }
      if (!responseNotes.ok) {
        this.setState({fetchError: true})
        console.log('error here')
      }
      return Promise.all([responseFolders.json(), responseNotes.json()]);
    })
    .then(([responseFolders, responseNotes]) => {
      this.setState({
        folders: responseFolders,
        notes: responseNotes,
        deleteItem: this.handleDeleteClick
      }, console.log(responseFolders))  
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
        <div className='body'>
          <DummyContext.Provider value={this.state}>
            <section className='sidebar'>
            <ErrorCatcher>
              <Route exact path ='/' component={MainFolderNav}/>
            </ErrorCatcher>
              <Route path ='/folder' component={MainFolderNav}/>
            <ErrorCatcher>
              <Route path ='/note/:noteName' component={NoteFolderNav}/>
            </ErrorCatcher>
              <Route path ='/addfolder' component={AddFolder}/>
              <Route path ='/addnote' component={MainFolderNav}/>
            </section>
            <section className ='main'>
            <ErrorCatcher>
              <Route exact path ='/' component={MainNoteList}/>
              <Route exact path ='/folder/:folderName' component={MainNoteList}/>
            </ErrorCatcher>
              <Route exact path ='/note/:noteName' component={NoteContent}/>
            <ErrorCatcher>
              <Route path ='/addfolder' component={MainNoteList}/>
            </ErrorCatcher>
              <Route path ='/addnote' component={AddNote}/>
            </section>
            {console.log(this.state.notes)}
          </DummyContext.Provider>
        </div>
      </div>
    );
  }
}

export default App;