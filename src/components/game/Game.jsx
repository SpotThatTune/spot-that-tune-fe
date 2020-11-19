import React, { useEffect  } from 'react';
import { useSelector } from 'react-redux';


import { Host } from './Host';
import Player from './Player';

const Game = () => {
  const {
    socket,
    user, 
    game
  } = useSelector(state => state);

  const isHost = (game.host.id === socket.id);

  return (
    <div>
      <h2>Game Room: {game.id}</h2>
      <h3>Hello {user}</h3>
      <div>
        {isHost ? <Host /> : <Player />}
      </div>
    </div>
  );
};

export default Game;
