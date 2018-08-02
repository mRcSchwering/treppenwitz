import React, { Component } from 'react';


export default class Organell extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getFill = this.getFill.bind(this);
  }

  handleClick(d) {
    this.props.onClick(this.props.name);
  }

  getFill() {
    return this.props.isSelected ? this.props.clickedColor : this.props.color;
  }

  render() {
    return (
      <path
        d={this.props.path}
        stroke={this.props.clickedColor}
        fill={this.getFill()}
        fillOpacity="0.5"
        onClick={this.handleClick}
      />
    );
  }
}
