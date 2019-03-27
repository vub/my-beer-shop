import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  render() {
    const filterText = this.props.filterText;

    return (
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search beer..."
          value={filterText}
          onChange={this.handleFilterTextChange}
          />
      </div>
    );
  }
}

export default SearchBar;
