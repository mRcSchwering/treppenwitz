import React, { Component } from 'react';
import Organell from './Organell';


export default class Cell extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.props.onClick(name);
  }

  isOrganellAvailable(name) {
    return this.props.available.includes(name);
  }

  isOrganellInSelection(name) {
    return this.props.selection.includes(name);
  }

  render() {
    const orgs = this.props.organelles.map((d) => {
      return (
        <Organell
          key={d.name}
          name={d.name}
          clickArea={d.clickArea}
          contourPaths={d.contourPaths}
          isAvailable={this.isOrganellAvailable(d.name)}
          isSelected={this.isOrganellInSelection(d.name)}
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
