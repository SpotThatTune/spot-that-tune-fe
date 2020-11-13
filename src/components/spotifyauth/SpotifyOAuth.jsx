import React from 'react';
import styles from './SpotifyOAuth.css';

export const SpotifyOAuth = () => {
  const authEndpoint = 'https://accounts.spotify.com/authorize';
  const clientId = process.env.CLIENT_ID;
  const redirectUri = process.env.REDIRECT_URI;
  const scopes = [
    'streaming',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'user-read-playback-state',
  ];
  return (
    <div className={styles.login}>
      <button className={styles.button} 
      // eslint-disable-next-line max-len
        onClick={() => window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`}>
        Login to Spotify
        <div className={styles.button__horizontal}></div>
        <div className={styles.button__vertical}></div>
      </button>        
    </div>
  );
    
};

export default SpotifyOAuth;
