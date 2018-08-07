import React, { Component } from 'react';


export default class Organell extends Component {

  getOpacity() {
    return this.props.isSelected ? 0.8 : 0.3;
  }

  render() {
    return (
      <g name={this.props.name}>
        <ClickArea
            name={this.props.name}
            fill={this.props.color}
            opacity={this.getOpacity()}
            path={this.props.clickAreaPath}
            onClick={this.props.onClick} />
        <Graphic elements={this.props.contourPaths} />
      </g>
    );
  }
}


class ClickArea extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <path
          d={this.props.path}
          fill={this.props.fill}
          fillOpacity={this.props.opacity}
          onClick={this.handleClick} />
    );
  }
}


function Graphic(props) {
  return <g className="OrganellContours">{props.elements}</g>;
}