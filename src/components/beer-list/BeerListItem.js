import React, { Component } from 'react';

import './BeerListItem.scss';

class BeerListItem extends Component {
  constructor(props) {
    super(props);
    this.handleSelectBeer = this.handleSelectBeer.bind(this);
  }

  handleSelectBeer() {
    this.props.onSelectItem(this.props.item);
  }

  render() {
    return (
      <div className="BeerListItem" onClick={this.handleSelectBeer}>
        {this.props.name}
      </div>
    );
  }
}

export default BeerListItem;
