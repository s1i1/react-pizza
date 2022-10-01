import React from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import EmptyPizzaBlock from '../components/PizzaBlock/EmptyPizzaBlock';
import Sort from '../components/Sort';

const HomePage = () => {
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
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {PizzaIsLoading
          ? [...new Array(8)].map((_, index) => {
              return <EmptyPizzaBlock key={index} />;
            })
          : pizzaData.map((obj) => {
              return <PizzaBlock key={obj.name} {...obj} />;
            })}
      </div>
    </div>
  );
};

export default HomePage;
