import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks';
import { fetchPizzas } from '../redux';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import EmptyPizzaBlock from '../components/PizzaBlock/EmptyPizzaBlock';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';

const HomePage: React.FC = () => {
  const dispatch = useAppDispatch();

  const { categoryIndex } = useAppSelector((state) => state.categories);
  const { sortObj } = useAppSelector((state) => state.sortPizza);
  const { currentPage } = useAppSelector((state) => state.pagination);
  const { pizzaData, status } = useAppSelector((state) => state.pizzasData);
  const { searchValue } = useAppSelector((state) => state.searchPizza);

  React.useEffect(() => {
    const page = `page=${currentPage}&limit=4`;
    const sortBy = `&sortBy=${sortObj.id}&order=${sortObj.order}`;
    const filterByCategory = categoryIndex > 0 ? `&category=${categoryIndex}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    dispatch(fetchPizzas({ page, sortBy, filterByCategory, search }));

    window.scrollTo(0, 0);
  }, [categoryIndex, sortObj, searchValue, currentPage, dispatch]);

  const renderEmpty = [...new Array(8)].map((_, index) => {
    return <EmptyPizzaBlock key={index} />;
  });

  const renderContent = pizzaData.map((obj) => {
    return <PizzaBlock key={obj.name} {...obj} />;
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryIndex} />
        <Sort sortObj={sortObj} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{status === 'loading' ? renderEmpty : renderContent}</div>
      <Pagination />
    </div>
  );
};

export default HomePage;
