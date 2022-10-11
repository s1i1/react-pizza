import React from 'react';
import { useSelector } from 'react-redux';
import CartTop from './CartTop';
import CartItem from './CartItem';
import CartBottom from './CartBottom';

export const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

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
