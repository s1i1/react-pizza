import React from 'react';
import CartTop from '../components/Cart/CartTop';
import CartItem from '../components/Cart/CartItem';
import CartBottom from '../components/Cart/CartBottom';

const CartPage = () => {
  return (
    <div className="container container--cart">
      <div className="cart">
        <CartTop />
        <CartItem />
        <CartBottom />
      </div>
    </div>
  );
};

export default CartPage;
