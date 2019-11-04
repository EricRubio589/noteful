import React from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import MainFolderNav from './MainFolderNav';
import MainNoteList from './MainNoteList';
import NoteContent from './NoteContent';
import NoteFolderNav from './NoteFolderNav';
import dummyStore from './dummy-store';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dummyStore,
      folders: dummyStore.folders,
      notes: dummyStore.notes
    }
  }

  render() {
    return (
      <div>
        <header className="headerStyle"><Link className='headerLink' to='/'>Noteful</Link></header>
        <body className='body'>
          <sidebar className='sidebar'>
            <Route 
              exact path ='/'
              render = {() => 
                <MainFolderNav data={this.state.folders}/>}             
            />
            <Route
              path ='/folder'
              render = {() =>
                <MainFolderNav data={this.state.folders}/>}
            />
            <Route
              path ='/note/:noteName'
              render = {(routeProps) => {
                const activeFolder = this.state.folders
                const matchNote = this.state.notes.find(note => note.name === routeProps.match.params.noteName)
                return (<NoteFolderNav data={activeFolder.find(folder => folder.id === matchNote.folderId)}/>)}
              }
            />
          </sidebar>
          <main className ='main'>
            <Route
              exact path ='/'
              render = {() => {
                const data = this.state.data
                const matchNotes = this.state.notes
                return(<MainNoteList data={data} matchNotes={matchNotes}/>)}
              }
            />
            <Route
              exact path ='/folder/:folderName'
              render = {(routeProps) => {
                const data = this.state.data
                const matchFolder = this.state.folders.find(folder => folder.name === routeProps.match.params.folderName)
                const matchNotes = this.state.notes.filter(note => note.folderId === matchFolder.id)
                return (<MainNoteList data={data} matchNotes={matchNotes}/>)}
              }
            />
            <Route
              exact path ='/note/:noteName'
              render = {routeProps => {
                const noteName = routeProps.match.params.noteName
                const noteObject = this.state.data.notes.find(note => note.name === noteName)
                console.log(this.state.notes) 
                return (<NoteContent note={noteObject}/>)
                }
              }
            />
            </main>
            {console.log()}
        </body>
      </div>
    );
  }
}

export default App;