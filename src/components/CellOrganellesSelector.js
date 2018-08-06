import React, { Component } from 'react';
import './CellOrganellesSelector.css';
import Cell from './Cell.js'
import ListSelector from "./ListSelector";


export default class CellOrganellesSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedNames: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState((prevState) => ({
      selectedNames: this.addOrRemoveName(prevState.selectedNames, name)
    }), function() {
      console.log('CellOrganellesSelector: ' + this.state.selectedNames);
    });
  }

  addOrRemoveName(arr, name) {
    if (!this.props.available.includes(name)) {
      return arr;
    }
    if (arr.includes(name)) {
      const idx = arr.indexOf(name);
      arr.splice(idx, 1);
      return arr;
    } else {
      return arr.concat([name]);
    }
  }

  render() {
    return(
      <div className="CellOrganellesSelector">

        <div className="cell-selector">
          <Cell
            organelles={this.props.organelles}
            selection={this.state.selectedNames}
            available={this.props.available}
            onClick={this.handleClick}
          />
        </div>

        <div className="list-selector">
          <ListSelector
            organelles={this.props.organelles}
            selection={this.state.selectedNames}
            available={this.props.available}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
