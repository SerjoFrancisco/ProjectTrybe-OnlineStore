import React, { Component } from 'react';
import { getProductFromId } from '../../services/api';

export default class ProductDetails extends Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    const { productId } = params;
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}
