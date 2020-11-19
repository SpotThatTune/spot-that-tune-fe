import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  setCurrentTrack,
  setGame,
  setPlaying
} from '../../actions/SpotifyActions';

const Player = () => {
  const socket = useSelector(state => state.socket);
  const dispatch = useDispatch();
  useEffect(() => {
    if(!socket) return;
    socket.on('changeTrack', track => {
      dispatch(setCurrentTrack(track));
    });
    socket.on('pause', () => {
      const audioEl = document.getElementById('player');
      audioEl.pause();
      dispatch(setPlaying(false));
    });
    socket.on('play', () => {
      const audioEl = document.getElementById('player');
      audioEl.play();
      dispatch(setPlaying(true));
    });
    socket.on('GAME_INFO', ({ game }) => {
      dispatch(setGame(game));
    });
  }, [socket]);
    
    

  return (
    <div>
      Player page
      <audio
        id="player" 
        className="player"
        controls={false} 
        src={currentTrack.preview_url}></audio>
    </div>
  );
};

export default Player;
