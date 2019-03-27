import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import BeerListItem from './BeerListItem';

import './BeerList.scss';

class BeerList extends Component {

  renderBeerList(beerList) {
    const listItems = beerList.map((item) => 
      <li key={item.id}>
        <Link to={`/beer/${item.id}`}>
          <BeerListItem name={item.name || ''} item={item} />
        </Link>
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
