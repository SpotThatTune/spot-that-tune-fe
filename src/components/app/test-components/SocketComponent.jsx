import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
const socketServer = process.env.SOCKET_SERVER;

export default function App() {
  
  const [socket, setSocket] = useState(socketIOClient(socketServer));
  // eslint-disable-next-line max-len
  const [songUrl, setSongUrl] = useState('https://p.scdn.co/mp3-preview/f399de2969ba2f0568fd1ec6aa8accdea1c311a9?cid=774b29d4f13844c495f206cafdad9c86');

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if(!socket) return;
    socket.on('songEvent', song => {
      setSongUrl(song.newSong);
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
      <audio className="player"controls="true" src={songUrl}></audio>
    </div>
  );
}
