import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart } from '../redux';
import Cart from '../components/Cart/index';
import EmptyCart from '../components/Cart/EmptyCart';

const CartPage: React.FC = () => {
  const { cartItems } = useSelector(selectCart);

  return (
    <div className="container container--cart">
      {cartItems.length > 0 ? <Cart cartItems={cartItems} /> : <EmptyCart />}
    </div>
  );
};

export default CartPage;
