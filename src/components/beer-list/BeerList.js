import React, { Component } from 'react';

import BeerListItem from './BeerListItem';

import './BeerList.css';

class BeerList extends Component {

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
      <div className="BeerList">
        <ul>
          <li><BeerListItem name="Beer 1" /></li>
          <li><BeerListItem name="Beer 2" /></li>
        </ul>
      </div>
    );
  }
}

export default BeerList;
