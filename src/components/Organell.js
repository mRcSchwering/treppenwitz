import React, { Component } from 'react';


export default class Organell extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(d) {
    this.props.onClick(this.props.name);
  }

  render() {
    return (
      <path
        d={this.props.path}
        stroke={this.props.clickedColor}
        fill={this.props.isSelected ? this.props.clickedColor : this.props.color}
        fillOpacity="0.5"
        onClick={this.handleClick}
      />
    );
  }
}
