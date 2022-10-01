import React from 'react';
import EmptyCartImage from '../../assets/img/empty-cart.png';

const EmptyCart = () => {
  return (
    <div class="cart cart--empty">
      <h2>
        Корзина пустая <icon>😕</icon>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу.
        <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={EmptyCartImage} alt={EmptyCart} />
      <a href="/" class="button button--black">
        <span>Вернуться назад</span>
      </a>
    </div>
  );
};

export default EmptyCart;
