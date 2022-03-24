import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';
// import increaseItemOnCart from '../../helpers/ItensCart';

export default class CartItem extends Component {
  render() {
    const { title, thumbnail, price, amount, id, handleClick } = this.props;
    return (
      <div id={ id } className="shopping-item">
        <div id={ id } className="item-first">
          <h3
            className="item-title"
            data-testid="shopping-cart-product-name"
          >
            { title }
          </h3>
          <img className="item-img" src={ thumbnail } alt="" />
        </div>
        <div id={ id } className="item-second">
          <p className="item-price">{`R$ ${price} `}</p>
          <p className="item-amount" data-testid="shopping-cart-product-quantity">
            {`Itens no Carrinho: ${amount}`}
          </p>
          <button
            className="item-button-amount"
            type="button"
            data-testid="product-decrease-quantity"
            name="-"
            onClick={ handleClick }
          >
            {' '}
            -
            {' '}

          </button>
          <button className="item-button-rmv" type="button">Remover</button>
          <button
            className="item-button-amount"
            type="button"
            data-testid="product-increase-quantity"
            name="+"
            onClick={ handleClick }
          >
            +

          </button>
        </div>
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
