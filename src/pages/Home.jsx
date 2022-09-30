import React from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import Sort from '../components/Sort';

const Home = ({ pizzaData }) => {
  return (
    <>
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
    </>
  );
};

export default Home;
