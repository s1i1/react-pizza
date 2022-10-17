import React from 'react';
import CartTop from './CartTop';
import CartItem from './CartItem';
import CartBottom from './CartBottom';

type PropItems = {
  count: number;
  currentSize: number;
  currentType: string;
  id: string;
  imageUrl: string;
  name: string;
  price: number;
};

type CartProps = {
  cartItems: PropItems[];
};

export const Cart: React.FC<CartProps> = ({ cartItems }) => {
  return (
    <div className="cart">
      <CartTop />
      {cartItems.map((obj) => {
        const key = `${obj.id}${obj.currentType}${obj.currentSize}`;
        return <CartItem key={key} {...obj} />;
      })}
      <CartBottom />
    </div>
  );
};

export default Cart;
