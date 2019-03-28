import React from 'react';
import ReactDOM from 'react-dom';
import BeerDetail from './BeerDetail';

describe("Beer Detail", () => {
  it('should renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<BeerDetail />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should render empty div if detail not provide', () => {
  });
});
