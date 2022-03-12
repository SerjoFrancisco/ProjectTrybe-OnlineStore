import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProductFromId } from '../../services/api';

export default class ProductDetails extends Component {
  constructor() {
    super();
    this.state = {
      productId: '',
      product: {},
    };
  }

  componentDidMount() {
    const { match: { params } } = this.props;
    const { productId } = params;
    this.setState({ productId }, () => this.productOnState());
  }

  async productOnState() {
    const { productId } = this.state;
    const details = await getProductFromId(productId);
    this.setState({ product: details });
  }

  render() {
    const { product } = this.state;
    return (
      <div>
        <section>
          <h3 data-testid="product-detail-name">{product.title}</h3>
          <img src={ product.thumbnail } alt={ product.title } />
          <p>{`R$: ${product.price} `}</p>
        </section>
        <section>
          <p>{`Itens Disponiveis:${product.available_quantity}`}</p>
          {product.tags?.map((tag, index) => <p key={ index }>{tag}</p>)}
        </section>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.object,
  productId: PropTypes.string,
}.isRequired;
