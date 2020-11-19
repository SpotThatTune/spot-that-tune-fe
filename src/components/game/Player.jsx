import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentTrack,
  setGame,
  setPlaying
} from '../../actions/SpotifyActions';

const Player = () => {
  const [userGuess, setUserGuess] = useState('');
  const { 
    socket, 
    currentTrack, 
    user, 
    game 
  } = useSelector(state => state);
 
  
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
      console.log('Hit');
    });
    socket.on('PLAY', () => {
      const audioEl = document.getElementById('player');
      audioEl.play();
      dispatch(setPlaying(true));
    });
    socket.on('GAME_INFO', ({ game }) => {
      dispatch(setGame(game));
    });
  }, [socket]);
    
  const handleGuess = event => {
    event.preventDefault();
    console.log(`${user} guessed ${userGuess}`);
    socket.emit('GUESS', { userGuess, user, gameId:game.id });
  };
  const handleChange = ({ target }) => {
    setUserGuess(target.value);
  };
  return (
    <div>
      Player page
      <audio
        id="player" 
        className="player"
        controls={true} 
        src={currentTrack.preview_url}></audio>

      <form onSubmit={handleGuess}>
        <input
          type="text"
          name="guess"
          value={userGuess}
          placeholder="Guess the Song"
          onChange={handleChange}/>
        <button>Make your guess</button>
      </form>
    </div>
  );
};

export default Player;
