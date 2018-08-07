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
    const available = this.props.organellData.map(d => d.name);
    if (!available.includes(name)) {
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
            organellSVGs={this.props.organellSVGs}
            organellData={this.props.organellData}
            selection={this.state.selectedNames}
            onClick={this.handleClick}
          />
        </div>

        <div className="list-selector">
          <ListSelector
            organellSVGs={this.props.organellSVGs}
            organellData={this.props.organellData}
            selection={this.state.selectedNames}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
