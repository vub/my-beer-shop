import React, { Component } from 'react';

import Search from './components/search/Search';
import BeerList from './components/beer-list/BeerList';
import BeerDetail from './components/beer-detail/BeerDetail';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <BeerList />
        <BeerDetail />
      </div>
    );
  }
}

export default App;
