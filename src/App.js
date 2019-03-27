import React, { Component } from 'react';

import SearchBar from './components/search-bar/SearchBar';
import BeerList from './components/beer-list/BeerList';
import BeerDetail from './components/beer-detail/BeerDetail';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      beerList: [
        {
          id: 1,
          name: 'Buzz'
        },
        {
          id: 2,
          name: 'Trashy Blonde'
        }
      ]
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <BeerList beerList={this.state.beerList} />
        <BeerDetail detail={this.state.beerList[0]}/>
      </div>
    );
  }
}

export default App;
