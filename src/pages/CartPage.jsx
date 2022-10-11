import React from 'react';
import { useSelector } from 'react-redux';
import CartTop from '../components/Cart/CartTop';
import CartItem from '../components/Cart/CartItem';
import CartBottom from '../components/Cart/CartBottom';

const CartPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <div className="container container--cart">
      <div className="cart">
        <CartTop />
        {cartItems.map((obj) => {
          return <CartItem key={obj.id} {...obj} />;
        })}
        <CartBottom />
      </div>
    </div>
  );
};

export default CartPage;
