import React from 'react';
import searchIcon from '../../assets/img/search-icon.svg';
import clearSearch from '../../assets/img/delete-icon.svg';
import styles from './SearchPizza.module.scss';

const index = () => {
  return (
    <div className={styles.root}>
      <input className={styles.input} placeholder="Поиск пиццы..." />
      <img className={styles.search} src={searchIcon} alt="searchIcon" />
      <img className={styles.clear} src={clearSearch} alt="clearSearch" />
    </div>
  );
};

export default index;
