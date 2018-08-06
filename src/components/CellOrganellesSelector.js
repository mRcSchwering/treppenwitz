import React, { Component } from 'react';
import './CellOrganellesSelector.css';
import Cell from './Cell.js'
import ListSelector from "./ListSelector";

export default class CellOrganellesSelector extends Component {

  organelles = [
     {
      name: "plasma-membrane",
      contourPath: "M 263.57143,125.93363 C 205.30679,80.273959 133.53817,38.824039 73.571429,98.790775 -73.913532,246.27574 498.28365,533.75613 262.14286,123.07649",
      fillPath: "M 263.57143,125.93363 C 205.30679,80.273959 133.53817,38.824039 73.571429,98.790775 -73.913532,246.27574 498.28365,533.75613 262.14286,123.07649",
      color: "lightyellow",
      clickedColor: "yellow",
      items: ['outer membrane', 'inner membrane']
    },
    {
      name: "nucleus",
      contourPath: "m 222.14286,170.21935 c -14.59539,-7.61692 -31.07603,-10.62615 -45.71429,-14.28572 -57.0991,-14.27477 -43.37447,50.22164 4.28572,69.28572 49.56494,19.82597 84.53182,-26.96707 44.28571,-55.71429",
      fillPath: "m 222.14286,170.21935 c -14.59539,-7.61692 -31.07603,-10.62615 -45.71429,-14.28572 -57.0991,-14.27477 -43.37447,50.22164 4.28572,69.28572 49.56494,19.82597 84.53182,-26.96707 44.28571,-55.71429",
      color: "lightgray",
      clickedColor: "gray",
      items: ['nucleoli', 'nuclear pore']
    },
    {
      name: "lysosome",
      contourPath: "M308.858,109.431 c0.208,5.956-1.104,11.007-6.694,13.827c-4.312,2.175-9.975,6.289-14.877,6.459c-11.156,0.387-22.485-6.155-22.92-18.743 c-0.373-10.727,10.92-20.391,21.54-20.757c4.653-0.162,10.929,4.639,15.354,6.328C306.86,98.68,308.661,103.756,308.858,109.431 C308.981,113.026,308.735,105.836,308.858,109.431z",
      fillPath: "M308.858,109.431 c0.208,5.956-1.104,11.007-6.694,13.827c-4.312,2.175-9.975,6.289-14.877,6.459c-11.156,0.387-22.485-6.155-22.92-18.743 c-0.373-10.727,10.92-20.391,21.54-20.757c4.653-0.162,10.929,4.639,15.354,6.328C306.86,98.68,308.661,103.756,308.858,109.431 C308.981,113.026,308.735,105.836,308.858,109.431z",
      color: "lightgreen",
      clickedColor: "green",
      items: []
    }
  ];

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
    super(props);
    this.state = {
      selectedNames: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState((prevState) => ({
      selectedNames: CellOrganellesSelector.addOrRemoveName(prevState.selectedNames, name)
    }), function() {
      console.log('CellOrganellesSelector: ' + this.state.selectedNames);
    });
  }

  render() {
    return(
      <div className="CellOrganellesSelector">

        <div className="cell-selector">
          <Cell
            organelles={this.organelles}
            selection={this.state.selectedNames}
            onClick={this.handleClick}
          />
        </div>

        <div className="list-selector">
          <ListSelector
            organelles={this.organelles}
            selection={this.state.selectedNames}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}
