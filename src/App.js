import React, { createContext } from 'react';
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
      notes: dummyStore.notes
    }
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
              <Route exact path ='/?' component={MainNoteList}/>
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