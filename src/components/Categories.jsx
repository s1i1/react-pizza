import React from 'react';

const Categories = () => {
  const [pizzaIndex, setPizzaIndex] = React.useState(0);
  const pizzaNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  return (
    <div class="categories">
      <ul>
        {pizzaNames.map((pizza, i) => {
          return (
            <li
              className={pizzaIndex === i ? 'active' : ''}
              key={i}
              onClick={() => setPizzaIndex(i)}>
              {pizza}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;
