import React, { Component } from 'react';
import Organell from './Organell';


export default class Cell extends Component {

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
    var orgs = this.props.organelles.map((d) => {
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
