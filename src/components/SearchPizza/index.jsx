import React from 'react';
import searchIcon from '../../assets/img/search-icon.svg';
import clearSearch from '../../assets/img/delete-icon.svg';
import SearchContext from '../context/SearchContext';
import styles from './SearchPizza.module.scss';

const SearchPizza = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);
  const searchInputRef = React.useRef();

  const onClearSearch = () => {
    setSearchValue('');
    searchInputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <input
        ref={searchInputRef}
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img className={styles.search} src={searchIcon} alt="searchIcon" />
      {searchValue && (
        <img className={styles.clear} src={clearSearch} alt="clearSearch" onClick={onClearSearch} />
      )}
    </div>
  );
};

export default SearchPizza;
