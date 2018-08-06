import React, { Component } from 'react';


export default class Organell extends Component {

  constructor(props) {
    super(props);
    this.getFill = this.getFill.bind(this);
  }

  getFill() {
    return this.props.isSelected ? this.props.clickedColor : this.props.color;
  }

  render() {
    return (
      <g name={this.props.name}>
        <FillPath
            name={this.props.name}
            fill={this.getFill()}
            path={this.props.fillPath}
            onClick={this.props.onClick} />
        <ContourPath2 contourPath={this.props.contourPath} />
      </g>
    );
  }
}


class FillPath extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.props.name);
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <path
        d={this.props.path}
        fill={this.props.fill}
        fillOpacity="0.5"
        onClick={this.handleClick} />
    );
  }
}


function ContourPath2(props) {
  return <path d={props.contourPath} stroke="gray" fill="none" />;
}