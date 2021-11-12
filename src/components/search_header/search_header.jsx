import React, { memo, useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = memo(({ onSearch, onLogoClick }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo} onClick={onLogoClick}>
        <img src="images/logo.png" alt="youtube logo" className={styles.img} />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <div className={styles.search}>
        <input
          className={styles.input}
          ref={inputRef}
          type="search"
          placeholder="Search"
          onKeyPress={onKeyPress}
        />
        <button className={styles.button} type="submit" onClick={onClick}>
          <img
            className={styles.buttonImg}
            src="images/search.png"
            alt="search button"
          />
        </button>
      </div>
      <img
        className={styles.profile}
        src="images/profile.png"
        alt="profile picture"
      />
    </header>
  );
});

export default SearchHeader;
