import React, { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../header/Header';
import styles from './Game.css';
import Host  from './Host';
import Player from './Player';
import ScoreBoard from './ScoreBoard';

import {
  setCurrentTrack,
  setGame,
  setPlaying
} from '../../actions/SpotifyActions';

const Game = () => {
  const {
    socket,
    user, 
    game,
    currentTrack,
  } = useSelector(state => state);
  const dispatch = useDispatch();
  const isHost = (game.host.id === socket.id);
  

  useEffect(() => {
    if(!socket) return;
    socket.on('CHANGE_TRACK', track => {
      dispatch(setCurrentTrack(track));
    });
    socket.on('PAUSE', () => {
      const audioEl = document.getElementById('player');
      audioEl.pause();
      dispatch(setPlaying(false));
    });
    socket.on('PLAY', () => {
      const audioEl = document.getElementById('player');
      audioEl.play();
      dispatch(setPlaying(true));
    });
    socket.on('GAME_INFO', ({ game }) => 
      dispatch(setGame(game)));
  }, [socket]);


  return (
    <div className={styles.content}>
      <Header/>
      <audio 
        id="player"
        className="player"
        controls={false} 
        src={currentTrack.preview_url}>
            
      </audio>
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
