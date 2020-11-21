import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Player.css';

import {
  setCurrentTrack,
} from '../../actions/SpotifyActions';

const Player = () => {
  const [userGuess, setUserGuess] = useState('');
  const [correct, setCorrect] = useState(false);
  const { 
    socket, 
    currentTrack, 
    user,
    playing, 
    game 
  } = useSelector(state => state);
 
  
  const dispatch = useDispatch();
  useEffect(() => {
    if(!socket) return;
    socket.on('CHANGE_TRACK', track => {
      dispatch(setCurrentTrack(track));
      setCorrect(false);
    });

    socket.on('CORRECT', () => {
      setCorrect(true);
    });
  }, [socket]);
    
  const handleGuess = event => {
    event.preventDefault();
    console.log(`${user} guessed ${userGuess}`);
    socket.emit('GUESS', { 
      userGuess,
      user,
      gameId:game.id,
      playerId:socket.id });
  };
  const handleChange = ({ target }) => {
    setUserGuess(target.value);
  };
  return (
    <div className={styles.guess}>
      <h3>{correct ? currentTrack.name : ''}</h3>
      <div>
        <form  onSubmit={handleGuess}>
          <input
            type="text"
            name="guess"
            value={userGuess}
            placeholder="Guess the Song"
            onChange={handleChange}/>
          <button 
            className={styles.button}
            disabled={!playing}>Make your guess
            <div className={styles.button__horizontal}></div>
            <div className={styles.button__vertical}></div>
          </button>
        </form></div>
      
    </div>
  );
};

export default Player;
