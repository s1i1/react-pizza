import React from 'react';
import CartTop from './CartTop';
import CartBottom from './CartBottom';
import CartItem from './CartItem';

const Cart = () => {
  return (
    <div className="cart">
      <CartTop />
      <CartItem />
      <CartBottom />
    </div>
  );
};

export default Cart;
