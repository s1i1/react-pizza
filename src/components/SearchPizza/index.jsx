import React from 'react';
import searchIcon from '../../assets/img/search-icon.svg';
import clearSearch from '../../assets/img/delete-icon.svg';
import SearchContext from '../context/SearchContext';
import styles from './SearchPizza.module.scss';

const SearchPizza = () => {
  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <div className={styles.root}>
      <input
        className={styles.input}
        placeholder="Поиск пиццы..."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <img className={styles.search} src={searchIcon} alt="searchIcon" />
      {searchValue && (
        <img
          className={styles.clear}
          src={clearSearch}
          alt="clearSearch"
          onClick={() => setSearchValue('')}
        />
      )}
    </div>
  );
};

export default SearchPizza;
