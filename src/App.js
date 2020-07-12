import React from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import ProductContextProvider from './context/productcontext';
import Navbar from './components/navbar.component';
import ProductList from './components/product-list.component';
import PageNotFound from './components/404.component';
import Inventory from './components/inventory.component';
import Checkout from './components/checkout.component';
import CartProvider from './context/cartcontext';

function App() {
  return (
      <React.Fragment>
        <ProductContextProvider>
          <Navbar />
          <CartProvider>
          <Switch>
            <Route exact path= '/' component={ProductList} />
            <Route path= '/inventory' component={Inventory} />
            <Route path= '/checkout' component= {Checkout} />
            <Route component = {PageNotFound} />
          </Switch>
          </CartProvider>
        </ProductContextProvider>
      </React.Fragment>
  );
}

export default App;
