import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Cell from './components/Cell.js'

class App extends Component {

  static addOrRemoveName(arr, name) {
    if (arr.includes(name)) {
      const idx = arr.indexOf(name);
      arr.splice(idx, 1);
      return arr;
    } else {
      return arr.concat([name]);
    }
  }

  constructor(props) {
    super(props)
    this.state = {selectedNames: []};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState((prevState) => ({
      selectedNames: App.addOrRemoveName(prevState.selectedNames, name)
    }), function() {
      console.log('App: ' + this.state.selectedNames);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">What a beautiful cell!</h1>
        </header>
        <div>
          <Cell selection={this.state.selectedNames} onClick={this.handleClick}/>
        </div>
      </div>
    );
  }
}

export default App;
