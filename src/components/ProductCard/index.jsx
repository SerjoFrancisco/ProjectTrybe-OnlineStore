import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class ProductCard extends Component {
  render() {
    const { title, thumbnail, price, id } = this.props;
    return (
      <div id="container">
        <Link to={ `/product-details/${id}` }>
          <div data-testid="product">
            <h3>{ title }</h3>
            <img src={ thumbnail } alt="" />
            <p>{`R$: ${price} `}</p>
          </div>
        </Link>
      </div>
    );
  }
}

ProductCard.propTypes = {
  title: PropTypes.string,
  thumbnail: PropTypes.string,
  price: PropTypes.number,
  id: PropTypes.string,
}.isRequired;
