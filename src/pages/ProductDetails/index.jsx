import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../../services/api';
import addProductToCart from '../../helpers/addProductToCart';
import Header from '../../components/Header/index';
import Forms from '../../components/Forms/Forms';
import './style.css';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productId: '',
      product: {},
      qty: 0,
      email: '',
      messageDescription: '',
      starRating: '',
      savedRates: [],
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { productId } = params;
    const qty = localStorage.getItem('qty');
    const savedRates = JSON.parse(localStorage.getItem('rate'));
    this.setState({ productId, savedRates, qty }, () => this.productOnState());
  }

  handleClick = () => {
    const { product: { title, thumbnail, price, id } } = this.state;
    const infos = { title, thumbnail, price, id, amount: 0 };
    addProductToCart(infos);
    const qty = localStorage.getItem('qty');
    this.setState({ qty });
  }

  saveRate = () => {
    const { email, messageDescription, starRating } = this.state;
    const savedRates = JSON.parse(localStorage.getItem('rate'));
    const toSave = savedRates
      ? [...savedRates, { email, messageDescription, starRating }]
      : [{ email, messageDescription, starRating }];
    localStorage.setItem('rate',
      JSON.stringify(toSave));
    this.setState(
      { savedRates: toSave,
        email: '',
        messageDescription: '',
        starRating: '' },
    );
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  async productOnState() {
    const { productId } = this.state;
    const details = await getProductFromId(productId);
    this.setState({ product: details });
  }

  render() {
    const { product, email, messageDescription, savedRates, qty } = this.state;
    return (
      <div>
        <Header qty={ qty } />
        <h3
          className="product-title"
          data-testid="product-detail-name"
        >
          {product.title}
        </h3>
        <div className="section-container">
          <section className="section-product">
            <img
              className="product-image"
              src={ product.thumbnail }
              alt={ product.title }
            />
          </section>
          <section>
            <p className="price">{`R$ ${product.price} `}</p>
            { product.shipping?.free_shipping
          && <p className="free-product" data-testid="free-shipping">Frete grátis</p> }
            <p className="available">
              {`Itens Disponiveis: ${product.available_quantity}`}
            </p>
          </section>
        </div>
        <button
          className="button-section"
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Adicionar ao Carrinho
        </button>
        <Forms
          messageDescription={ messageDescription }
          onChange={ this.handleChange }
          email={ email }
          onClick={ this.saveRate }
        />

        {
          savedRates?.map((item, i) => (
            <div key={ i }>
              <p>{item.email}</p>
              <p>{item.messageDescription}</p>
              <p>{item.starRating}</p>
            </div>
          ))
        }
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
  productId: PropTypes.string,
}.isRequired;
