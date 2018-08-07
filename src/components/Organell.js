import React, { Component } from 'react';


export default class Organell extends Component {

  getOpacity() {
    return this.props.isSelected ? 0.8 : 0.3;
  }

  render() {
    return (
      <g name={this.props.organellSVG.name}>
        <ColorArea
            fill={this.props.color}
            opacity={this.getOpacity()}
            path={this.props.organellSVG.clickAreaPath} />
        <Graphic elements={this.props.organellSVG.graphicElements} />
        <ClickArea
            name={this.props.organellSVG.name}
            path={this.props.organellSVG.clickAreaPath}
            onClick={this.props.onClick} />
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
    return <path d={this.props.path} fill="transparent" onClick={this.handleClick} />;
  }
}


function ColorArea(props) {
  return <path d={props.path} fill={props.fill} fillOpacity={props.opacity} />;
}


function Graphic(props) {
  return <g className="OrganellContours">{props.elements}</g>;
}