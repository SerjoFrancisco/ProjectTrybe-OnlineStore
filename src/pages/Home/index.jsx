import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getCategories } from '../../services/api';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      categorias: [],
    };
  }

  async componentDidMount() {
    const categorias = await getCategories();
    this.setState({ categorias });
  }

  render() {
    const { categorias } = this.state;
    return (
      <div>
        <input />
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

      </div>
    );
  }
}
