import React from 'react';
import styles from './search_header.module.css';

const SearchHeader = (props) => (
  <header className={styles.header}>
    <div className={styles.logo}>
      <img src="images/logo.png" alt="youtube logo" className={styles.img} />
      <h1 className={styles.title}>Youtube</h1>
    </div>
    <input type="search" className={styles.input} placeholder="Search" />
    <button className={styles.button}>
      <img
        className={styles.buttonImg}
        src="images/search.png"
        alt="search button"
      />
    </button>
  </header>
);

export default SearchHeader;
