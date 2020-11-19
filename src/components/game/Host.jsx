import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentTrack,
  setGame,
  setPlaying
} from '../../actions/SpotifyActions';

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
    
  const handlePlayPause = () => {
    socket.emit('PLAY_CHANGE', playing, game.id);  
  };

  const handleCorrect = () => {
    socket.emit('CORRECT', { playerId:player.id,
      gameId:game.id });
  };

  const handleIncorrect = () => {
    socket.emit('INCORRECT');
  };
    
  return (
    <div>
      <h3>{currentTrack.name ? currentTrack.name : 'Select a track'}</h3>
      <button onClick={handleClick}>New Song</button>
      <button
        onClick={handlePlayPause}>{playing ? '||' : '>'}</button> 
      <audio 
        id="player"
        className="player"
        controls={true} 
        src={currentTrack.preview_url}></audio>
      <h3>{player.name} guessed {guess}</h3>
      <button
        name="correct"
        onClick={handleCorrect}
      >Correct</button>
      <button
        name="inCorrect"
        onClick={handleIncorrect}
      >Incorrect</button>
    </div>
  );
};
