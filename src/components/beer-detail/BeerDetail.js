import React, { Component } from 'react';
import './BeerDetail.css';

class BeerDetail extends Component {

  render() {
    const beer = this.props.detail;

    return (
      beer ? <div className="BeerDetail">
        <h1>Beer Detail</h1>
        <p>Name: {beer.name}</p>
      </div> : ''
    );
  }
}

export default BeerDetail;
