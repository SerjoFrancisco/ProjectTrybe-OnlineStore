import React, { Component } from 'react';

export default class index extends Component {
  render() {
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt="" />
        <p>{`R$: ${price} `}</p>
        <p data-testid="shopping-cart-product-quantity">0</p>
      </div>
    );
  }
}
