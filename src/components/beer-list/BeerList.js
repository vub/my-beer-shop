import React, { Component } from 'react';

import BeerListItem from './BeerListItem';

import './BeerList.scss';

class BeerList extends Component {

  constructor(props) {
    super(props);
    this.handleSelectItem = this.handleSelectItem.bind(this);
  }

  handleSelectItem(item) {
    this.props.onSelectItem(item);
  }

  renderBeerList(beerList) {
    const listItems = beerList.map((item) => 
      <li key={item.id}>
        <BeerListItem name={item.name || ''} item={item} onSelectItem={this.handleSelectItem} />
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
