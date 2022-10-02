import React from 'react';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import EmptyPizzaBlock from '../components/PizzaBlock/EmptyPizzaBlock';
import Sort from '../components/Sort';

const HomePage = () => {
  const [pizzaData, setPizzaData] = React.useState([]);
  const [PizzaIsLoading, SetPizzaIsLoading] = React.useState(true);
  const [categoryIndex, setCategoryIndex] = React.useState(0);
  const [sortObj, setSortObj] = React.useState({
    name: 'популярности',
    id: 'rating',
    order: 'desc',
  });

  React.useEffect(() => {
    const sortBy = `sortBy=${sortObj.id}&order=${sortObj.order}`;
    const fillterByCategory = categoryIndex > 0 ? `&category=${categoryIndex}` : '';

    fetch(`https://6335977cea0de5318a16db9b.mockapi.io/pizzaData?${sortBy}${fillterByCategory}`)
      .then((res) => res.json())
      .then((data) => {
        setPizzaData(data);
        SetPizzaIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, sortObj]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryIndex} onClickCategory={setCategoryIndex} />
        <Sort sortObj={sortObj} setSortObj={setSortObj} />
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
