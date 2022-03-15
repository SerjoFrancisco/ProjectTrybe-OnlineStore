import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../../services/api';
import addProductToCart from '../../helpers/addProductToCart';
import Header from '../../components/Header/index';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productId: '',
      product: {},
      qty: 0,
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { productId } = params;
    const qty = localStorage.getItem('qty');
    this.setState({ productId, qty }, () => this.productOnState());
  }

  handleClick = () => {
    const { product: { title, thumbnail, price, id } } = this.state;
    const infos = { title, thumbnail, price, id, amount: 0 };
    addProductToCart(infos);
    const qty = localStorage.getItem('qty');
    this.setState({ qty });
  }

  async productOnState() {
    const { productId } = this.state;
    const details = await getProductFromId(productId);
    this.setState({ product: details });
  }

  render() {
    const { state: { product, qty } } = this;
    return (
      <div>
        <Header qty={ qty } />
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
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
  productId: PropTypes.string,
}.isRequired;
