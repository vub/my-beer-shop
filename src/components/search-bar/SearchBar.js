import React, { Component } from 'react';
import './SearchBar.css';

class SearchBar extends Component {
  render() {
    const filterText = this.props.filterText;

    return (
      <div className="SearchBar">
        <input
          type="text"
          placeholder="Search beer..."
          filterText={filterText}
          />
      </div>
    );
  }
}

export default SearchBar;
