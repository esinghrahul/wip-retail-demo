import React, { createContext, useState, useEffect, useContext } from 'react';

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getCartTotal
} from '../reducers/cart-utils';
import { ProductContext } from './productcontext';

export const CartContext = createContext({
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0
});

const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const {products} = useContext(ProductContext)

  // const addItem = product => setCartItems(addItemToCart(cartItems, product));
  const addItem = product => setCartItems(addItemToCart(cartItems, product));
  const removeItem = item => setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = item =>
    setCartItems(filterItemFromCart(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems, products]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItem,
        removeItem,
        clearItemFromCart,
        cartItemsCount,
        cartTotal
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};


export default CartProvider;