import React, { Component } from 'react';
import PropTypes from 'prop-types';


export default class ListItem extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onClick(this.props.name);
  }

  getClass() {
    return this.props.isChecked ? "ListSelectorItemChecked" : "ListSelectorItemUnchecked";
  }

  render() {
    const subitems = this.props.items.map((d) => {
      return <ListSubItem
        key={d}
        name={d} />;
    });
    return(
      <a name={this.props.name} onClick={this.handleClick}>
        <li className={this.getClass()}>
            <b>{this.props.name}</b>
          <ul className="ListSelectorItemSublist">{subitems}</ul>
        </li>
      </a>
    );
  }
}

ListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isChecked: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired
};


function ListSubItem(props) {
  return <li className="ListSubItem">{props.name}</li>;
}

ListSubItem.propTypes = {
  name: PropTypes.string.isRequired
};