import React, { Component } from 'react';

import './BeerListItem.scss';

class BeerListItem extends Component {
  
  render() {
    return (
      <div className="BeerListItem">
        {this.props.name}
      </div>
    );
  }
}

export default BeerListItem;
