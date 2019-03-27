import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import SearchBar from './components/search-bar/SearchBar';
import BeerList from './components/beer-list/BeerList';
import BeerDetail from './components/beer-detail/BeerDetail';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      beerList: [],
      selectedBeer: undefined,
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  handleSelectItem(item) {
    this.setState({
      selectedBeer: item
    });
  }

  componentDidMount() {
    this.getAllBeer();
  }

  getAllBeer() {
    axios.get('https://api.punkapi.com/v2/beers')
    .then(res => {
      const beerList = res.data;
      this.setState({beerList});
    })
  }

  filteredBeerList(beerList, filterText) {
    return _.filter(beerList, (item) => {
      return item.name.includes(filterText);
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar
          filterText={this.state.filterText}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <BeerList
          beerList={this.filteredBeerList(this.state.beerList, this.state.filterText)}
          onSelectItem={this.handleSelectItem} />
        <BeerDetail detail={this.state.selectedBeer}/>
      </div>
    );
  }
}

export default App;
