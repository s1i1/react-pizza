import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchContext from '../components/context/SearchContext';
import Categories from '../components/Categories';
import PizzaBlock from '../components/PizzaBlock';
import EmptyPizzaBlock from '../components/PizzaBlock/EmptyPizzaBlock';
import Sort from '../components/Sort';
import Pagination from '../components/Pagination';
import { setCategoryIndex } from '../redux';

const HomePage = () => {
  const dispatch = useDispatch();

  const { categoryIndex } = useSelector((state) => state.categories);

  const [pizzaData, setPizzaData] = React.useState([]);
  const [PizzaIsLoading, SetPizzaIsLoading] = React.useState(true);
  const [sortObj, setSortObj] = React.useState({
    name: 'популярности',
    id: 'rating',
    order: 'desc',
  });
  const [currentPage, setCurrentPage] = React.useState(1);

  const { searchValue } = React.useContext(SearchContext);

  React.useEffect(() => {
    const page = `page=${currentPage}&limit=4`;
    const sortBy = `&sortBy=${sortObj.id}&order=${sortObj.order}`;
    const fillterByCategory = categoryIndex > 0 ? `&category=${categoryIndex}` : '';
    const search = searchValue ? `&search=${searchValue}` : '';

    fetch(
      `https://6335977cea0de5318a16db9b.mockapi.io/pizzaData?${page}${sortBy}${fillterByCategory}${search}`,
    )
      .then((res) => res.json())
      .then((data) => {
        setPizzaData(data);
        SetPizzaIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [categoryIndex, sortObj, searchValue, currentPage]);

  const renderEmpty = [...new Array(8)].map((_, index) => {
    return <EmptyPizzaBlock key={index} />;
  });

  const renderContent = pizzaData.map((obj) => {
    return <PizzaBlock key={obj.name} {...obj} />;
  });

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryIndex} onClickCategory={(i) => dispatch(setCategoryIndex(i))} />
        <Sort sortObj={sortObj} setSortObj={setSortObj} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{PizzaIsLoading ? renderEmpty : renderContent}</div>
      <Pagination onChangePage={setCurrentPage} />
    </div>
  );
};

export default HomePage;
