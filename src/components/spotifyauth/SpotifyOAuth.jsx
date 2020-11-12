import React from 'react';
import styles from './SpotifyOAuth.css';

export const SpotifyOAuth = () => {
    
  return (
    <div className={styles.login}>
      <button className={styles.button}>
        Login to Spotify
        <div className={styles.button__horizontal}></div>
        <div className={styles.button__vertical}></div>
      </button>        
    </div>
  );
    
};

export default SpotifyOAuth;
