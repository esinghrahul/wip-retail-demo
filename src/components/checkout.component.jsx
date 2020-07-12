import React, { useContext } from 'react';

import {CartContext} from '../context/cartcontext'
import CartItem from './cart.component';
import Title from './title.component';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
  
    return cartItems.length ? ( 
      <div className='container-fluid text-center'>
      <Title title= 'Shopping Cart' />
      <div className='card mb-3'>
        <div className='row card-header bg-transaparent'>
          <div className='col-10 mx-auto col-lg-2'>
            <span></span>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <span>Product Name</span>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <span>Quantity</span>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <span>Price/Unit</span>
          </div>
          <div className='col-10 mx-auto col-lg-2'>
            <span>Remove</span>
          </div>
        </div>
        {cartItems.map(cartItem => (
          <CartItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <h3 className='card-footer bg-transparent'>TOTAL: {cartTotal} INR</h3>
      </div>
      </div>
    ) : (
        <><h3 className = "py-5 container-fluid text-center d-lg-block"><span>&#128722;</span>Your cart is currently empty.<hr/> Please visit products section to select from our wide range of offerings.</h3></>
    );
  };
  
  export default Checkout;