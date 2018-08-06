import React, { Component } from 'react';
import Organell from './Organell';


export default class Cell extends Component {

  static isOrganellInSelection(arr, name) {
    return arr.includes(name);
  }

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.props.onClick(name);
  }

  render() {
    const orgs = this.props.organelles.map((d) => {
      return (
        <Organell
          key={d.name}
          name={d.name}
          fillPath={d.fillPath}
          contourPath={d.contourPath}
          isSelected={Cell.isOrganellInSelection(this.props.selection, d.name)}
          color={d.color}
          clickedColor={d.clickedColor}
          onClick={this.handleClick}
        />
      );
    });
    return (
      <svg>{orgs}</svg>
    );
  }
}
