import React, { useEffect  } from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/Header';


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
    <div>
      <Header/>
      <h2>Game Room: {game.id}</h2>
      <h3>Hello {user}</h3>
      <div>
        {isHost ? <Host /> : <Player />}
      </div>
      <ScoreBoard />
    </div>
  );
};

export default Game;
