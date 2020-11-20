import React, { useEffect  } from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/Header';
import styles from './Game.css';


import { Host } from './Host';
import Player from './Player';
import ScoreBoard from './ScoreBoard';

const Game = () => {
  const {
    socket,
    user, 
    game
  } = useSelector(state => state);

  const isHost = (game.host.id === socket.id);

  return (
    <div className={styles.content}>
      <Header/>
      
      <h2>Game Room: {game.id}</h2>
      <div>
        {isHost ? <Host /> : <Player />}
      </div>
      <ScoreBoard />
      <h2 className={styles.username}>HELLO {user}</h2>
    </div>
  );
};

export default Game;
