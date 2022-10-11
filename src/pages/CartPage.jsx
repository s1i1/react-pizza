import React from 'react';
import { useSelector } from 'react-redux';
import Cart from '../components/Cart/index';
import EmptyCart from '../components/Cart/EmptyCart';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="container container--cart">
      {cartItems.length > 0 ? <Cart cartItems={cartItems} /> : <EmptyCart />}
    </div>
  );
};

export default CartPage;
