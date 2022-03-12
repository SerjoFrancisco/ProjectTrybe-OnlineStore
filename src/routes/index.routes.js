import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Cart from '../pages/Cart';
import ProductDetails from '../pages/ProductDetails';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/cart" component={ Cart } />
    <Route exact path="/product-details/:productId" component={ ProductDetails } />
  </Switch>
);

export default Routes;
