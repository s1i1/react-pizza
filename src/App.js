import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import './scss/app.scss';

function App() {
  const [pizzaData, setPizzaData] = React.useState([]);
  const [PizzaIsLoading, SetPizzaIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://6335977cea0de5318a16db9b.mockapi.io/pizzaData')
      .then((res) => res.json())
      .then((data) => {
        setPizzaData(data);
        SetPizzaIsLoading(false);
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Routes>
          <Route
            path="/"
            element={<Home pizzaData={pizzaData} PizzaIsLoading={PizzaIsLoading} />}
          />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
