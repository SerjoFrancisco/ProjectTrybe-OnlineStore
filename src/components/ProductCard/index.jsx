import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import addProductToCart from '../../helpers/addProductToCart';
import './style.css';

export default class ProductCard extends Component {
  handleClick = () => {
    console.log(this.props);
    const { title, thumbnail, price, id, increaseQty,
      available_quantity: availableQuantity } = this.props;
    const infos = {
      title,
      thumbnail,
      price,
      id,
      availableQuantity,
      amount: 0,
    };
    addProductToCart(infos);
    increaseQty();
  }

  render() {
    const { title, thumbnail, price, id,
      shipping: { free_shipping: freeShipping } } = this.props;
    return (
      <div id="container" className="card-container" data-testid="product">
        <Link to={ `/product-details/${id}` } id={ id }>
          <div className="card-box" data-testid="product-detail-link" id={ id }>
            <img className="img-card" src={ thumbnail } alt="" />
            <h2 className="price-card">{`R$ ${price} `}</h2>
            <h3 className="title-card">{ title }</h3>
            { freeShipping && <p data-testid="free-shipping">Frete grátis</p>}
          </div>
        </Link>
        <button
          className="button-card"
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.handleClick }
        >
          Comprar
        </button>
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
