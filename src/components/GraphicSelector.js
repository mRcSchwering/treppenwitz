import React, { Component } from 'react';
import GraphicItem from './GraphicItem';
import PropTypes from 'prop-types';


export default class GraphicSelector extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.props.onClick(name);
  }

  isItemInSelection(name) {
    return this.props.selection.includes(name);
  }

  isItemInData(name) {
    const available = this.props.itemData.filter(d => d.name === name);
    return available.length > 0;
  }

  getItemColor(name){
    const filtered = this.props.itemData.filter(d => d.name === name);
    if (filtered.length > 0) {
      return filtered[0].color;
    }
    return 'transparent';
  }

  render() {
    const items = this.props.itemSVGs.map((d) => {
      return (
        <GraphicItem
          key={d.name}
          itemSVG={d}
          isSelected={this.isItemInSelection(d.name)}
          isAvailable={this.isItemInData(d.name)}
          color={this.getItemColor(d.name)}
          onClick={this.handleClick}
        />
      );
    });
    return (
      <svg>{items}</svg>
    );
  }
}

GraphicSelector.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  itemData: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          items: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
  ).isRequired,
  itemSVGs: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          clickAreaPath: PropTypes.string.isRequired,
          graphicElements: PropTypes.arrayOf(PropTypes.element).isRequired,
      })
  ).isRequired,
};
