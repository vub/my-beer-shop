import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import _ from 'lodash';

import SearchBar from './components/search-bar/SearchBar';
import BeerList from './components/beer-list/BeerList';
import BeerDetail from './components/beer-detail/BeerDetail';

import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      beerList: [],
    }
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
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

  getBeer(id) {
    return this.state.beerList.find(b => b.id === parseInt(id));
  }

  render() {
    return (
      <Router>
        <div className="App container">
          <div className="row">
            <div className="col-5">
              <div className="menu">
                <div className="header">
                  <h1>BEERS</h1>
                </div>
                <SearchBar
                  filterText={this.state.filterText}
                  onFilterTextChange={this.handleFilterTextChange}
                  className="row"
                  />
                <BeerList
                  beerList={this.filteredBeerList(this.state.beerList, this.state.filterText)} />
              </div>
            </div>
            <div className="col-7">
              <div className="detail">
                <Route exact={true} path="/" render ={() => (
                  <div>
                    <h1>BEER SHOP</h1>
                    <h3>Discover the taste that you like best!</h3>
                  </div>
                )} />
                <Route path="/beer/:id" render={({match}) => (
                  <BeerDetail detail={this.getBeer(match.params.id)} />
                )} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
