import React from 'react';

const Categories = ({ value, onClickCategory }) => {
  const pizzaNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

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
