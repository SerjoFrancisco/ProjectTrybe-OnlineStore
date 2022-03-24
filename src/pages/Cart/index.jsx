import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import CartItem from '../../components/CartItem';
import increaseItemOnCart from '../../helpers/ItensCart';
import Header from '../../components/Header';
import './style.css';

export default class Cart extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      products: JSON.parse(localStorage.getItem('cartItems')),
    };
  }

  handleClick(event) {
    increaseItemOnCart(event);
    this.setState({ products: JSON.parse(localStorage.getItem('cartItems')) });
  }

  render() {
    const { products } = this.state;

    return (
      <div className="cart-web">
        <Header />
        <h1 className="cart-title">Carrinho de Compras</h1>
        { products?.length ? (
          <div className="shopping-container">
            {products.map((product) => (
              <CartItem
                key={ product.id }
                { ...product }
                handleClick={ this.handleClick }
              />
            ))}
          </div>
        )
          : (
            <p className="empty-cart" data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)}
        <Link to="/checkout">
          <button
            className="checkout-button"
            type="button"
            data-testid="checkout-products"
          >
            Finalizar Compra
          </button>
        </Link>
      </div>
    );
  }
}
