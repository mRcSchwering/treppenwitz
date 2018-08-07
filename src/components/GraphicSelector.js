import React, { Component } from 'react';
import Organell from './Organell';
import PropTypes from 'prop-types';


export default class GraphicSelector extends Component {

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
          organellSVG={d}
          isSelected={this.isOrganellInSelection(d.name)}
          color={this.getOrganellColor(d.name)}
          onClick={this.handleClick}
        />
      );
    });
    return (
      <svg>{orgs}</svg>
    );
  }
}

GraphicSelector.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  organellData: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          items: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
  ).isRequired,
  organellSVGs: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          clickAreaPath: PropTypes.string.isRequired,
          graphicElements: PropTypes.arrayOf(PropTypes.element).isRequired,
      })
  ).isRequired,
};
