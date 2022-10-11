import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setTotal } from './redux';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import NotFoundPage from './pages/NotFoundPage';
import './scss/app.scss';

function App() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  React.useEffect(() => {
    dispatch(setTotal());
  }, [dispatch, cartItems]);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
