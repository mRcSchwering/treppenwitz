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

  isOrganellInSelection(name) {
    return this.props.selection.includes(name);
  }

  getOrganellColor(name){
    const filtered = this.props.organellData.filter(d => d.name === name);
    if (filtered.length > 0) {
      return filtered[0].color;
    }
    return 'transparent';
  }

  render() {
    const orgs = this.props.organellSVGs.map((d) => {
      return (
        <Organell
          key={d.name}
          name={d.name}
          clickAreaPath={d.clickAreaPath}
          contourPaths={d.contourPaths}
          isSelected={this.isOrganellInSelection(d.name)}
          color={this.getOrganellColor(d.name)}
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
