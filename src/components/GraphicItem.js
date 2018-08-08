import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class GraphicItem extends Component {

  getOpacity() {
    return this.props.isSelected ? 0.8 : 0.3;
  }

  render() {
    const elements = [
        <ColorArea
            key="1"
            fill={this.props.color}
            opacity={this.getOpacity()}
            path={this.props.itemSVG.clickAreaPath} />,
        <Graphic key="2" elements={this.props.itemSVG.graphicElements} />,
    ];
    if (this.props.isAvailable) {
      elements.push(
          <ClickArea
            key="3"
            name={this.props.itemSVG.name}
            path={this.props.itemSVG.clickAreaPath}
            onClick={this.props.onClick} />
      );
    }
    return <g name={this.props.itemSVG.name}>{elements}</g>;
  }
}

GraphicItem.propTypes = {
  color: PropTypes.PropTypes.string.isRequired,
  isSelected: PropTypes.bool.isRequired,
  isAvailable: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  itemSVG: PropTypes.shape({
      name: PropTypes.string.isRequired,
      clickAreaPath: PropTypes.string.isRequired,
      graphicElements: PropTypes.arrayOf(PropTypes.element).isRequired,
  }).isRequired,
};


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

ClickArea.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};


function ColorArea(props) {
  return <path d={props.path} fill={props.fill} fillOpacity={props.opacity} />;
}

ColorArea.propTypes = {
  fill: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  opacity: PropTypes.number.isRequired,
};


function Graphic(props) {
  return <g className="OrganellContours">{props.elements}</g>;
}

Graphic.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.element).isRequired,
};