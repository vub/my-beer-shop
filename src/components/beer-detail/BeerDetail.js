import React, { Component } from 'react';
import './BeerDetail.scss';

class BeerDetail extends Component {

  render() {
    const beer = this.props.detail;

    return (
      <div className="BeerDetail">
        { beer ? 
          <div>
            <h3>{beer.name}</h3>
            <h6>{beer.tagline}</h6>
            <p>Description: {beer.description}</p>
            <p>ABV: {beer.abv}</p>
            <p>IBU: {beer.ibu}</p>
          </div> : ''
        }
      </div>
    );
  }
}

export default BeerDetail;
