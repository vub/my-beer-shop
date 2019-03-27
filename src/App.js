import React, { Component } from 'react';

import SearchBar from './components/search-bar/SearchBar';
import BeerList from './components/beer-list/BeerList';
import BeerDetail from './components/beer-detail/BeerDetail';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <BeerList beerList={this.state.beerList}/>
        <BeerDetail />
      </div>
    );
  }
}

export default App;
