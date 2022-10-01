import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundPage from '../../assets/img/404-error.png';

const NotFound = () => {
  return (
    <div className="cart cart--empty">
      <img
        src={NotFoundPage}
        alt="NotFoundPage"
        style={{ marginTop: '0px', marginBottom: '0px' }}
      />
      <h2>
        Страница не найдена <icon>😕</icon>
      </h2>
      <p>
        Вернитесь на главную страницу
        <br />
        Или подождите 3 секунды и вас автоматически перенаправит на главную страницу
      </p>
      <Link to="/" className="button button--black" style={{ marginTop: '40px' }}>
        <span>Вернуться назад</span>
      </Link>
    </div>
  );
};

export default NotFound;
