import React, { Component } from 'react';
import CartItem from '../../components/CartItem';
import increaseItemOnCart from '../../helpers/ItensCart';

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
      <div>
        { products?.length ? (
          <div>
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
            <p data-testid="shopping-cart-empty-message">
              Seu carrinho está vazio
            </p>)}
      </div>
    );
  }
}
