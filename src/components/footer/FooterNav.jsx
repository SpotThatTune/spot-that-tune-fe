import React from 'react';
import { Link } from 'react-router-dom';
import styles from './FooterNav.css';

export const FooterNav = () => {
    
  return (
    <div className={styles.links}>
      <Link className={styles.about} >
      ABOUT US
      </Link>
      <Link className={styles.instruction}>
      INSTRUCTIONS
      </Link>
             
    </div>
  );
    
};

export default FooterNav;
