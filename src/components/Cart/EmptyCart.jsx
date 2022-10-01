import React from 'react';
import { Link } from 'react-router-dom';
import EmptyCartImage from '../../assets/img/empty-cart.png';

const EmptyCart = () => {
  return (
    <div className="cart cart--empty">
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={EmptyCartImage} alt="EmptyCart" />
      <Link to="/" className="button button--black">
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default EmptyCart;
