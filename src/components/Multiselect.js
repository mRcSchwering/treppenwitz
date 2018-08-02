import React, { Component } from 'react';


export default class Multiselect extends Component {

  constructor(props) {
    super(props);
    this.state = {selected: []};
    this.handleChange = this.handleChange.bind(this);
    this.isChecked = this.isChecked.bind(this);
  }

  handleChange(name) {
    this.props.onClick(name)
  }

  isChecked(name) {
    return this.props.selection.includes(name) ? true : false;
  }

  render() {
    return this.props.organelles.map((d) => {
      return <Checkbox
        key={d.name}
        name={d.name}
        isChecked={this.isChecked(d.name)}
        onChange={this.handleChange} />;
    });
  }
}


class Checkbox extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.getChecked = this.getChecked.bind(this);
  }

  handleChange() {
    this.props.onChange(this.props.name);
  }

  getChecked() {
    return false;
  }

  render() {
    return(
      <label className="multiselect-checkbox">
        {this.props.name}
        <input
          name={this.props.name}
          type="checkbox"
          checked={this.props.isChecked}
          onChange={this.handleChange} />
      </label>
    );
  }
}
