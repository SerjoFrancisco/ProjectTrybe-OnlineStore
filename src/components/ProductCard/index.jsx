import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price } = this.props;
    return (
      <div id="container">
        <div data-testid="product">
          <h3>{ title }</h3>
          <img src={ thumbnail } alt="" />
          <p>{`R$: ${price} `}</p>
        </div>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumnail: PropTypes.string,
  price: PropTypes.number,
}.isRequired;
