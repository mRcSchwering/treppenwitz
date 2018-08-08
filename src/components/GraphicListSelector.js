import React, { Component } from 'react';
import './GraphicListSelector.css';
import GraphicSelector from './GraphicSelector.js'
import ListSelector from "./ListSelector";
import PropTypes from 'prop-types';


export default class GraphicListSelector extends Component {
    /**
     * GraphicListSelector (1)
     *   |
     *   |-- GraphicSelector (1)
     *   |     |
     *   |     |-- GraphicItem (n)
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
    const available = this.props.itemData.map(d => d.name);
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
      <div className="GraphicListSelector">

        <div className="graphic-selector">
          <GraphicSelector
            itemSVGs={this.props.itemSVGs}
            itemData={this.props.itemData}
            selection={this.state.selectedNames}
            onClick={this.handleClick}
          />
        </div>

        <div className="list-selector">
          <ListSelector
            itemData={this.props.itemData}
            selection={this.state.selectedNames}
            onClick={this.handleClick}
          />
        </div>
      </div>
    );
  }
}

GraphicListSelector.propTypes = {
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