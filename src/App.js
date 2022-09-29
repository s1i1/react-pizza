import React from 'react';
import Categories from './components/Categories';
import Header from './components/Header';
import PizzaBlock from './components/PizzaBlock';
import Sort from './components/Sort';
import './scss/app.scss';

function App() {
  const [pizzaData, setPizzaData] = React.useState([]);

  React.useEffect(() => {
    fetch('https://6335977cea0de5318a16db9b.mockapi.io/pizzaData')
      .then((res) => res.json())
      .then((data) => setPizzaData(data));
  });

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {pizzaData.map((obj) => {
              return <PizzaBlock key={obj.name} {...obj} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
