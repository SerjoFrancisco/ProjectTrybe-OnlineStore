import React, { Component } from 'react';
import CartItem from '../../components/CartItem';
import Header from '../../components/Header';
import './style.css';

export default class index extends Component {
  constructor() {
    super();
    this.state = {
      cartItems: [],
    };
  }

  componentDidMount() {
    const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    this.setState({ cartItems });
  }

  render() {
    const { cartItems } = this.state;
    return (
      <div>
        <Header />
        <h1 className="form-title">Formulário de Compra</h1>
        <div className="form-items">
          { cartItems?.map((item) => (<CartItem key={ item.id } { ...item } />)) }
        </div>
        <form className="form-container">
          <input
            className="name"
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
          />
          <div className="form-boxone">
            <input
              className="email"
              data-testid="checkout-email"
              placeholder="E-mail: emailtendetudo@email.com"
            />
            <input
              className="cpf"
              data-testid="checkout-cpf"
              placeholder="CPF: ___.___.___-__"
            />
          </div>
          <div className="form-boxtwo">
            <input
              className="cellphone"
              data-testid="checkout-phone"
              placeholder="Telefone: (_)_____-____"
            />
            <input
              className="cep"
              data-testid="checkout-cep"
              placeholder="CEP: ______-___"
            />
          </div>
          <input
            className="address"
            data-testid="checkout-address"
            placeholder="Endereço: Rua das Flores, nº333, Bairro Central"
          />
        </form>
      </div>
    );
  }
}
