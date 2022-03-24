import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import imageCart from '../Images/cart.png';
import logotipo from '../Images/logo.png';
import './style.css';

export default class Header extends Component {
  render() {
    const { qty } = this.props;
    return (
      <div className="header">
        <Link to="/">
          <img src={ logotipo } alt="logo" className="logo" />
        </Link>
        <Link to="/cart" data-testid="shopping-cart-button">
          <p
            className="qty-cart"
            data-testid="shopping-cart-size"
          >
            { qty }
          </p>
          <img
            src={ imageCart }
            alt="carrinho"
            className="image-cart"
          />
        </Link>
      </div>
    );
  }
}

Header.propTypes = {
  qty: PropTypes.number,
}.isRequired;
