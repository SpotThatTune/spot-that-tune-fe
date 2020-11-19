import React, { useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  setCurrentTrack,
  setGame,
  setPlaying
} from '../../actions/SpotifyActions';
const socketServer = process.env.SOCKET_SERVER;

const Game = () => {

  const socket = useSelector(state => state.socket);
  const currentTrack = useSelector(state => state.currentTrack);
  const tracks = useSelector(state => state.tracks);
  const game = useSelector(state => state.game);
  const playing = useSelector(state => state.playing);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!socket) return;
    socket.on('changeTrack', track => {
      dispatch(setCurrentTrack(track));
    });
    socket.on('pause', () => {
      const audioEl = document.getElementsByClassName('player')[0];
      audioEl.pause();
      dispatch(setPlaying(false));
    });
    socket.on('play', () => {
      const audioEl = document.getElementsByClassName('player')[0];
      audioEl.play();
      dispatch(setPlaying(true));
    });
    socket.on('GAME_INFO', ({ game }) => {
      dispatch(setGame(game));
    });
  }, [socket]);
  
  


  const handleClick = () => {
    const randomTrack = Math.floor(Math.random() * tracks.length);
    const newTrack = tracks[randomTrack];
    dispatch(setCurrentTrack(newTrack));
    socket.emit('changeTrack', newTrack, game.id);
  };

  const handlePlayPause = () => {
    socket.emit('playChange', playing, game.id);  
  };

  return (
    <div>
      <div>{currentTrack.name ? currentTrack.name : 'Select a song' }</div>
      <button onClick={handleClick}>New Song</button>
      <button
        onClick={handlePlayPause}>{playing ? '||' : '>'}</button>
      <audio 
        className="player"
        controls={false} 
        src={currentTrack.preview_url}></audio>
    </div>
  );
};

export default Game;
