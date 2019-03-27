import React, { Component } from 'react';

import BeerListItem from './BeerListItem';

import './BeerList.css';

class BeerList extends Component {

  renderBeerList(beerList) {
    const listItems = beerList.map((item) => 
      <li key={item.id}>
        <BeerListItem name={item.name} id={item.id} />
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }
  
  render() {
    return (
      <div className="BeerList">
        {this.renderBeerList(this.props.beerList)}
      </div>
    );
  }
}

export default BeerList;
