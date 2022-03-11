import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../../services/api';
import ProductCard from '../../components/ProductCard/index';

export default class Home extends Component {
  constructor() {
    super();
    this.searchForProducts = this.searchForProducts.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      categorias: [],
      pesquisa: '',
      products: [],
    };
  }

  async componentDidMount() {
    const categorias = await getCategories();
    this.setState({ categorias });
  }

  handleChange({ target }) {
    this.setState({ pesquisa: target.value });
  }

  async searchForProducts() {
    const { pesquisa } = this.state;
    const products = await getProductsFromCategoryAndQuery(pesquisa);
    this.setState({ products });
    console.log(products);
  }

  render() {
    const { categorias, products } = this.state;
    return (
      <div>
        <label htmlFor="input">
          <input
            id="input"
            type="text"
            data-testid="query-input"
            onChange={ this.handleChange }
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.searchForProducts }
          >
            Pesquisar

          </button>
        </label>
        <p data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </p>
        <Link to="/cart" data-testid="shopping-cart-button">Cart</Link>
        <section>
          {
            categorias.map(({ name, id }) => (
              <button
                key={ id }
                type="button"
                data-testid="category"
              >
                { name }
              </button>))
          }
        </section>
        <main>
          { products?.results?.map((element) => (
            <ProductCard
              key={ element.id }
              { ...element }
            />)) }
        </main>
      </div>
    );
  }
}
