import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class CartItem extends Component {
  render() {
    const { title, thumbnail, price, amount } = this.props;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ thumbnail } alt="" />
        <p>{`R$: ${price} `}</p>
        <p data-testid="shopping-cart-product-quantity">{ amount }</p>
      </div>
    );
  }
}

CartItem.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  amount: PropTypes.number,
}.isRequired;
