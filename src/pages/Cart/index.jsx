import React, { Component } from 'react';
import CartItem from '../../components/CartItem';

export default class Cart extends Component {
  constructor() {
    super();
    this.state = {
      products: JSON.parse(localStorage.getItem('cartItems')),
    };
  }

  render() {
    const { products } = this.state;

    return (
      <div>
        { products?.length ? (
          <div>
            {products.map((product) => (
              <CartItem key={ product.id } { ...product } />
            ))}
          </div>
        )
          : (
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)}
      </div>
    );
  }
}
