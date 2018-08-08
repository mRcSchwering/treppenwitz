import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GraphicListSelector from './components/GraphicListSelector'
import getOrganellSVGs from './organellSVGs';
import getOrganellesData from './organellesData';

export default class App extends Component {

  render() {
    const organellSVGs = getOrganellSVGs();
    const organellData = getOrganellesData();

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Look at that cell... look at it!</h1>
          <h3>Props to Christian Stolte</h3>
        </header>
        <GraphicListSelector itemSVGs={organellSVGs} itemData={organellData} />
      </div>
    );
  }
}

