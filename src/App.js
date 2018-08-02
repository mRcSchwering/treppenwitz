import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CellOrganellesSelector from './components/CellOrganellesSelector'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What a beautiful cell!</h1>
        </header>
        <CellOrganellesSelector />
      </div>
    );
  }
}

export default App;
