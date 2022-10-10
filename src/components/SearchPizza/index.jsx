import React from 'react';
import debounce from 'lodash.debounce';
import { useDispatch } from 'react-redux';
import searchIcon from '../../assets/img/search-icon.svg';
import clearSearch from '../../assets/img/delete-icon.svg';
import { setSearchValue } from '../../redux';
import styles from './SearchPizza.module.scss';

const SearchPizza = () => {
  const dispatch = useDispatch();

  const [value, setValue] = React.useState('');

  const searchInputRef = React.useRef();

  const onClearSearch = () => {
    dispatch(setSearchValue(''));
    setValue('');
    searchInputRef.current.focus();
  };

  const inputDebounce = React.useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 250),
    [],
  );

  const onChangeInput = (e) => {
    setValue(e.target.value);

    inputDebounce(e.target.value);
  };

  return (
    <div className={styles.root}>
      <input
        ref={searchInputRef}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={value}
        onChange={(e) => onChangeInput(e)}
      />
      <img className={styles.search} src={searchIcon} alt="searchIcon" />
      {value && (
        <img className={styles.clear} src={clearSearch} alt="clearSearch" onClick={onClearSearch} />
      )}
    </div>
  );
};

export default SearchPizza;
