import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
const socketServer = process.env.SOCKET_SERVER;
export default function App() {
  
  const [socket, setSocket] = useState(socketIOClient(socketServer));
  const [songUrl, setSongUrl] = useState('');
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if(!socket) return;
    socket.on('songEvent', song => {
      setSongUrl(song.newSong);
    });
    socket.on('pause', () => {
      setPlaying(false);
    });
    socket.on('play', () => {
      setPlaying(true);
    });
    
  }, [socket]);
  
  


  const handleClick = () => {
    socket.emit('setSongUrl', songUrl);
  };

  const handlePlayPause = () => {
   
    socket.emit('playChange', playing);
  };
  const handleChange = ({ target }) => {
    setSongUrl(target.value);
  };
  return (
    <div>
      <input 
        name="songUrl"
        value={songUrl}
        onChange={handleChange}/>
      <button onClick={handleClick}>Click me</button>
      <button
        onClick={handlePlayPause}>{playing ? '||' : '>'}</button>
    </div>
  );
}
