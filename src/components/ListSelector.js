import React, { Component } from 'react';
import ListItem from './ListItem';
import PropTypes from 'prop-types';


export default class ListSelector extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name) {
    this.props.onClick(name)
  }

  isChecked(name) {
    return this.props.selection.includes(name);
  }

  render() {
    const listItems = this.props.itemData.map((d) => {
      return <ListItem
        key={d.name}
        name={d.name}
        items={d.items}
        isChecked={this.isChecked(d.name)}
        onClick={this.handleClick} />;
    });
    return(<ul className="ListSelector">{listItems}</ul>);
  }
}

ListSelector.propTypes = {
  selection: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired,
  itemData: PropTypes.arrayOf(
      PropTypes.shape({
          name: PropTypes.string.isRequired,
          color: PropTypes.string.isRequired,
          items: PropTypes.arrayOf(PropTypes.string).isRequired,
      })
  ).isRequired,
};