import React from 'react';
import { useDispatch } from 'react-redux';
import { setSortObj } from '../redux';

type PropItems = {
  name: string;
  id: string;
  order: string;
};

type SortProps = {
  sortObj: PropItems;
};

const Sort: React.FC<SortProps> = ({ sortObj }) => {
  const dispatch = useDispatch();

  const [visibleSort, setVisibleSort] = React.useState(false);

  const labelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const closePopup = (e: MouseEvent) => {
      if (e.target instanceof Element) {
        const target = e.target.parentNode;

        const refCurrent = labelRef.current;

        if (refCurrent && target !== refCurrent) {
          setVisibleSort(false);
        }
      }
    };

    document.body.addEventListener('click', closePopup);
    return () => {
      document.body.removeEventListener('click', closePopup);
    };
  }, []);

  const sortNames = [
    { name: 'популярности', id: 'rating', order: 'desc' },
    { name: 'цене (сначала дорогие)', id: 'price', order: 'desc' },
    { name: 'цене (сначала дешевые)', id: 'price', order: 'asc' },
    { name: 'алфавиту А-Я', id: 'name', order: 'asc' },
    { name: 'алфавиту Я-А', id: 'name', order: 'desc' },
  ];

  const onClickSortName = (obj: PropItems) => {
    dispatch(setSortObj(obj));
    setVisibleSort(false);
  };

  return (
    <div className="sort">
      <div ref={labelRef} className="sort__label" onClick={() => setVisibleSort(!visibleSort)}>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
            fill="#2C2C2C"
          />
        </svg>
        <b>Сортировка по:</b>
        <span>{sortObj.name}</span>
      </div>
      {visibleSort && (
        <div className="sort__popup">
          <ul>
            {sortNames.map((obj, index) => {
              return (
                <li
                  key={index}
                  className={obj.name === sortObj.name ? 'active' : ''}
                  onClick={() => onClickSortName(obj)}>
                  {obj.name}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Sort;
