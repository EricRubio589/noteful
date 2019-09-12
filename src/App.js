import React from 'react';
import './App.css';
import MainFolderNav from './MainFolderNav';
import MainNoteList from './MainNoteList';
import dummyStore from './dummy-store';


class App extends React.Component {
  state = {
    data: dummyStore,
    folders: dummyStore.folders.map(folder => folder.name),
    notes: dummyStore.notes.map(note => note.name)
  }

  changeSelectedFolder = (id) => {
    this.setState({folders: dummyStore.folders.map(folder => folder.name),notes: dummyStore.notes.map(note => note.name)})
  }

  render() {
  return (
    <div>
      <header className="headerStyle">Noteful</header>
      <body className='body'>
        <MainFolderNav folders={this.state.dummyStore}/>
        <MainNoteList notes={this.state.notes}/>
        {console.log(this.state.folders)}
      </body>
    </div>
  );
  }
}

export default App;