import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentTrack,
  setGame,
  setPlaying
} from '../../actions/SpotifyActions';
import styles from './Host.css';

export const Host = () => {
  const {
    socket,
    currentTrack,
    tracks,
    game,
    playing,
  } = useSelector(state => state);
  const [guess, setGuess] = useState(''); 
  const [player, setPlayer] = useState({}); 
  const dispatch = useDispatch();
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
    socket.on('GAME_INFO', ({ game }) => {
      dispatch(setGame(game));
    });
    socket.on('GUESS', ({ userGuess, user, playerId }) => {
      setGuess(userGuess);
      setPlayer({ name:user, id:playerId });
    });
    socket.on('WINNER', () => {
      
    });
  }, [socket]);

  const handleClick = () => {
    const randomTrack = Math.floor(Math.random() * tracks.length);
    const newTrack = tracks[randomTrack];
    dispatch(setCurrentTrack(newTrack));
    socket.emit('CHANGE_TRACK', newTrack, game.id); 
  };
  
  const handlePlay = () => {
    socket.emit('PLAY_CHANGE', playing, game.id);
  };

  const handleCorrect = () => {
    socket.emit('CORRECT', { playerId:player.id,
      gameId:game.id });
  };

  const handleIncorrect = () => {
    socket.emit('INCORRECT');
    socket.emit('PLAY_CHANGE', playing, game.id); 
    setGuess('');
  };
    
  return (
    <div>
      <h3>{currentTrack.name ? currentTrack.name : 'Click new song to start'}</h3>
      <button 
        className={styles.button}
        onClick={handleClick}>New Song
        <div className={styles.button__horizontal}></div>
        <div className={styles.button__vertical}></div>
      </button>
      <button 
        className={styles.button}
        onClick={handlePlay}>
          Play
        <div className={styles.button__horizontal}></div>
        <div className={styles.button__vertical}></div>
      </button>
      <audio 
        id="player"
        className="player"
        controls={false} 
        src={currentTrack.preview_url}></audio>
      
      <button
        className={styles.button}
        name="correct"
        onClick={handleCorrect}
      >Correct
        <div className={styles.button__horizontal}></div>
        <div className={styles.button__vertical}></div>
      </button>
      <button
        className={styles.button}
        name="inCorrect"
        onClick={handleIncorrect}
      >Incorrect
        <div className={styles.button__horizontal}></div>
        <div className={styles.button__vertical}></div>
      </button>
      <h3>{guess ? `${player.name} guesses ${guess}` : '' }</h3>
    </div>
  );
};
