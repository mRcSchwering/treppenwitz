import React, { Component } from 'react';


export default class Organell extends Component {

  constructor(props) {
    super(props);
    this.getFill = this.getFill.bind(this);
  }

  getFill() {
    if (!this.props.isAvailable) {
      return 'white';
    }
    return this.props.isSelected ? this.props.clickedColor : this.props.color;
  }

  render() {
    return (
      <g name={this.props.name}>
        <FillPath
            name={this.props.name}
            fill={this.getFill()}
            path={this.props.clickArea}
            onClick={this.props.onClick} />
        <ContourPath2 contourPaths={this.props.contourPaths} />
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
  const paths = props.contourPaths.map((d, i) => {
    return <path d={d} key={i} fill="none" stroke="gray"/>;
  });
  return <g className="OrganellContours">{paths}</g>;
}