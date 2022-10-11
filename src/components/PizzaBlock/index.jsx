import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCart, setCartItems, incrementItemCount, filterCartItems } from '../../redux';

const PizzaBlock = ({ imageUrl, name, price, sizes, types, id, ...props }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector(selectCart);

  const [sizeIndex, setSizeIndex] = React.useState(0);
  const [typeIndex, setTypeIndex] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    cartItems.map((item) => {
      if (item.id === id) {
        return setCount(item.count);
      }
    });
  }, []);

  const pizzaType = ['тонкое', 'традиционное'];

  const onClickButton = () => {
    const currentType = pizzaType[typeIndex];
    const currentSize = sizes[sizeIndex];

    const obj = {
      id: id,
      imageUrl: imageUrl,
      name: name,
      price: price,
      currentType: currentType,
      currentSize: currentSize,
      count: count,
    };

    setCount(count + 1);

    dispatch(setCartItems(obj));
    dispatch(incrementItemCount(obj.id));
    dispatch(filterCartItems(obj.id));
  };

  return (
    <div className="pizza-block">
      <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {types.map((type, index) => {
            return (
              <li
                key={index}
                className={typeIndex === index ? 'active' : ''}
                onClick={() => setTypeIndex(index)}>
                {pizzaType[type]}
              </li>
            );
          })}
        </ul>
        <ul>
          {sizes.map((size, index) => {
            return (
              <li
                key={index}
                className={sizeIndex === index ? 'active' : ''}
                onClick={() => setSizeIndex(index)}>
                {size} см.
              </li>
            );
          })}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <div className="button button--outline button--add" onClick={onClickButton}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
          <i>{count}</i>
        </div>
      </div>
    </div>
  );
};

export default PizzaBlock;
