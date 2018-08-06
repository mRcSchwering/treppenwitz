import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CellOrganellesSelector from './components/CellOrganellesSelector'

export default class App extends Component {

  render() {
    const organelles = require('./organelles');
    const availableOrganelles = ['cytosole', 'plasma-membrane', 'cytoskeleton', 'endoplasmatic-reticulum', 'nucleus',
                                 'endosome', 'lysosome', 'peroxysome', 'golgi-apparatus', 'mitochondrium'];  // testing highlighting of only available organelles

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Props to Christian Stolte</h1>
        </header>
        <CellOrganellesSelector organelles={organelles} available={availableOrganelles} />
      </div>
    );
  }
}

