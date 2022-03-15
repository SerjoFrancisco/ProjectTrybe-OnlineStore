import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductFromId } from '../../services/api';
import addProductToCart from '../../helpers/addProductToCart';
import Forms from '../../components/Forms/Forms';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productId: '',
      product: {},
      email: '',
      messageDescription: '',
      starRating: '',
      savedRates: [],
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { productId } = params;
    const savedRates = JSON.parse(localStorage.getItem('rate'));
    this.setState({ productId, savedRates }, () => this.productOnState());
  }

  handleClick = () => {
    const { product: { title, thumbnail, price, id } } = this.state;
    const infos = { title, thumbnail, price, id, amount: 0 };
    addProductToCart(infos);
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
    const { product, email, messageDescription, savedRates } = this.state;
    return (
      <div>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <section>
          <h3 data-testid="product-detail-name">{product.title}</h3>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{`R$: ${product.price} `}</p>
        </section>
        <section>
          <p>{`Itens Disponiveis:${product.available_quantity}`}</p>
          {product.tags?.map((tag, index) => <p key={ index }>{tag}</p>)}
        </section>
        <button
          type="button"
          data-testid="product-detail-add-to-cart"
          onClick={ this.handleClick }
        >
          Add to Cart
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
