import React, { useEffect } from 'react';
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
    
  const dispatch = useDispatch();
  useEffect(() => {
    if(!socket) return;
    socket.on('CHANGE_TRACK', track => {
      dispatch(setCurrentTrack(track));
    });
      
    socket.on('GAME_INFO', ({ game }) => {
      dispatch(setGame(game));
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
    
  return (
    <div>
      <button onClick={handleClick}>New Song</button>
      <button
        onClick={handlePlayPause}>{playing ? '||' : '>'}</button> 
      <audio 
        id="player"
        className="player"
        controls={true} 
        src={currentTrack.preview_url}></audio>
    </div>
  );
};
