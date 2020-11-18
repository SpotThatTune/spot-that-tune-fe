import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from 'socket.io-client';
import { setCurrentTrack } from '../../actions/SpotifyActions';
const socketServer = process.env.SOCKET_SERVER;

const Game = () => {
  const [socket, setSocket] = useState(socketIOClient(socketServer));
  const currentTrack = useSelector(state => state.currentTrack);
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
 
  }, [socket]);
  
  


  const handleClick = () => {
    socket.emit('changeTrack', currentTrack);
  };

  const handlePlayPause = () => {
    socket.emit('playChange', playing);
    
  };
  // const handleChange = ({ target }) => {
  //   setSongUrl(target.value);
  // };
  return (
    <div>
      {/* <input 
        name="currentTrackName"
        value={currentTrack?.name}
        onChange={handleChange}/> */}
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={handlePlayPause}>{playing ? '||' : '>'}</button>
      <audio 
        className="player"
        controls={false} 
        src={currentTrack?.preview_url}></audio>
    </div>
  );
};

export default Game;
