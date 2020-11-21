/* eslint-disable max-len */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentTrack,
} from '../../actions/SpotifyActions';
import styles from './Host.css';

const Host = () => {
  const {
    socket,
    tracks,
    game,
    playing,
    currentTrack
  } = useSelector(state => state);
  const [guess, setGuess] = useState(''); 
  const [player, setPlayer] = useState({}); 
  const dispatch = useDispatch();
  
  useEffect(() => {
    socket.on('GUESS', ({ userGuess, user, playerId }) => {
      setGuess(userGuess);
      setPlayer({ name:user, id:playerId });
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
      <h3 className={styles.instructions}>{currentTrack.name ? currentTrack.name : 'CLICK NEW SONG TO POPULATE A SONG THEN, CLICK PLAY'}</h3>
      <div className={styles.allbuttons}>
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
      </div>
      <h3 className={styles.instructions}>{guess ? `${player.name} guesses ${guess}` : '' }</h3>
    </div>
  );
};

export default Host;
