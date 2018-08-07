import React, { Component } from 'react';
import ListItem from './ListItem';


export default class ListSelector extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: []};
    this.handleClick = this.handleClick.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }

  handleClick(name) {
    this.props.onClick(name)
  }

  isChecked(name) {
    return this.props.selection.includes(name);
  }

  render() {
    const listItems = this.props.organellData.map((d) => {
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