import React from 'react';
import CartTop from './CartTop';
import CartItem from './CartItem';
import CartBottom from './CartBottom';

export const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <CartTop />
      {cartItems.map((obj) => {
        return <CartItem key={obj.id} {...obj} />;
      })}
      <CartBottom />
    </div>
  );
};

export default Cart;
