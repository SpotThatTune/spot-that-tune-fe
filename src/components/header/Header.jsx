import React from 'react';
import styles from './Header.css';
import logo from '../../../public/assets/spot-that-tune-logo.png';

export const Header = () => {

  return (
    <header className={styles.header}>
      <img src={logo}/>
      <h1 className={styles.h1}>
      SPOT THAT TUNE
      </h1>
    </header>
  );

};

export default Header;
