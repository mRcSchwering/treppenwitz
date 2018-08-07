import React, { Component } from 'react';
import './CellOrganellesSelector.css';
import GraphicSelector from './GraphicSelector.js'
import ListSelector from "./ListSelector";
import PropTypes from 'prop-types';


export default class CellOrganellesSelector extends Component {
    /**
     * CellOrganellesSelector (1)
     *   |
     *   |-- GraphicSelector (1)
     *   |     |
     *   |     |-- Organell (n)
     *   |           |
     *   |           |-- ClickArea (1)
     *   |           |-- ColorArea (1)
     *   |           |-- Graphic (1)
     *   |
     *   |-- ListSelector (1)
     *         |
     *         |-- ListItem (n)
     *               |
     *               |-- ListSubItem (n)
     */

  constructor(props) {
    super(props);
    this.state = {
      selectedNames: []
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.setState((prevState) => ({
      selectedNames: this.addOrRemoveName(prevState.selectedNames, name)
    }), function() {
      console.log('CellOrganellesSelector: ' + this.state.selectedNames);
    });
  }

  addOrRemoveName(arr, name) {
    const available = this.props.organellData.map(d => d.name);
    if (!available.includes(name)) {
      return arr;
    }
    if (arr.includes(name)) {
      const idx = arr.indexOf(name);
      arr.splice(idx, 1);
      return arr;
    } else {
      return arr.concat([name]);
    }
  }

  render() {
    return(
      <div className="CellOrganellesSelector">

        <div className="graphic-selector">
          <GraphicSelector
            organellSVGs={this.props.organellSVGs}
            organellData={this.props.organellData}
            selection={this.state.selectedNames}
            onClick={this.handleClick}
          />
        </div>

        <div className="list-selector">
          <ListSelector
            organellSVGs={this.props.organellSVGs}
            organellData={this.props.organellData}
            selection={this.state.selectedNames}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

CellOrganellesSelector.propTypes = {
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