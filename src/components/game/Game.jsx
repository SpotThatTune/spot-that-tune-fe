import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from 'socket.io-client';
import { setCurrentTrack, setGame } from '../../actions/SpotifyActions';
const socketServer = process.env.SOCKET_SERVER;

const Game = () => {
  // const [socket, setSocket] = useState(socketIOClient(socketServer));
  const socket = useSelector(state => state.socket);
  const currentTrack = useSelector(state => state.currentTrack);
  const tracks = useSelector(state => state.tracks);
  const game = useSelector(state => state.game);
  const [playing, setPlaying] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!socket) return;
    socket.on('changeTrack', track => {
      dispatch(setCurrentTrack(track));
    });
    socket.on('pause', () => {
      const audioEl = document.getElementsByClassName('player')[0];
      audioEl.pause();
      setPlaying(false);
    });
    socket.on('play', () => {
      const audioEl = document.getElementsByClassName('player')[0];
      audioEl.play();
      setPlaying(true);
    });
    socket.on('GAME_INFO', ({ game }) => {
      dispatch(setGame(game));
    });
  }, [socket]);
  
  


  const handleClick = () => {
    const randomTrack = Math.floor(Math.random() * tracks.length);
    const newTrack = tracks[randomTrack];
    dispatch(setCurrentTrack(newTrack));
    console.log(newTrack, randomTrack);
    socket.emit('changeTrack', newTrack, game.id);
  };

  const handlePlayPause = () => {
    socket.emit('playChange', playing);
    
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
