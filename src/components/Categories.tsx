import React from 'react';
import { useDispatch } from 'react-redux';
import { setCategoryIndex } from '../redux';

type CategoriesProps = {
  value: number;
};

const Categories: React.FC<CategoriesProps> = ({ value }) => {
  const dispatch = useDispatch();

  const pizzaNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const onClickCategory = (i: number) => {
    dispatch(setCategoryIndex(i));
  };

  return (
    <div className="categories">
      <ul>
        {pizzaNames.map((pizzaName, i) => {
          return (
            <li className={value === i ? 'active' : ''} key={i} onClick={() => onClickCategory(i)}>
              {pizzaName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
