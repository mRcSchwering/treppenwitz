import React, { Component } from 'react';
import Organell from './Organell';


export default class Cell extends Component {

  organelles = [
     {
      name: "plasma-membrane",
      path: "M 263.57143,125.93363 C 205.30679,80.273959 133.53817,38.824039 73.571429,98.790775 -73.913532,246.27574 498.28365,533.75613 262.14286,123.07649",
      color: "lightyellow",
      clickedColor: "yellow",
    },
    {
      name: "nucleus",
      path: "m 222.14286,170.21935 c -14.59539,-7.61692 -31.07603,-10.62615 -45.71429,-14.28572 -57.0991,-14.27477 -43.37447,50.22164 4.28572,69.28572 49.56494,19.82597 84.53182,-26.96707 44.28571,-55.71429",
      color: "lightgray",
      clickedColor: "gray",
    }
  ];

  static isOrganellInSelection(arr, name) {
    return arr.includes(name) ? true : false;
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    console.log('Cell: clicked on ' + name);
    this.props.onClick(name);
  }

  render() {
    var orgs = this.organelles.map((d) => {
      return (
        <Organell
          key={d.name}
          name={d.name}
          path={d.path}
          isSelected={Cell.isOrganellInSelection(this.props.selection, d.name)}
          color={d.color}
          clickedColor={d.clickedColor}
          onClick={this.handleClick}
        />
      );
    })
    return (
      <svg width="400" height="400" fill="red">{orgs}</svg>
    );
  }
}