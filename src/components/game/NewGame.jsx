import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socketIOClient from 'socket.io-client';
import { useHistory } from 'react-router-dom';
import { 
  fetchPlaylistTracks, 
  fetchUserPlaylists, 
  setToken,
  setCurrentTrack
} from '../../actions/SpotifyActions';
import Game from './Game';
const socketServer = process.env.SOCKET_SERVER;


const NewGame = () => {
  const userPlaylists = useSelector(state => state.userPlaylists);
  const token = useSelector(state => state.token);
  const tracks = useSelector(state => state.tracks);
  const currentTrack = useSelector(state => state.currentTrack);
  const [socket, setSocket] = useState(socketIOClient(socketServer));
  const [gameId, setGameId] = useState('');
  const [currentPlaylist, setCurrentPlaylist] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    if(!socket) return;

  }, [socket]);
  useEffect(() => {
    if(!token) {
      const hash = window.location.hash;
      const params = hash.split('&');
      const access_token = params[0].slice(params[0].indexOf('=') + 1);
      console.log(access_token);
      dispatch(setToken(access_token));
      dispatch(fetchUserPlaylists(access_token));
    }  
  }, []);

  useEffect(() => {
    if(currentPlaylist) dispatch(fetchPlaylistTracks(token, currentPlaylist));
  }, [currentPlaylist]);

  const handleChange = ({ target }) => {
    if(target.name === 'userPlaylists')setCurrentPlaylist(target.value);
    if(target.name === 'gameId')setGameId(target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    const randomTrack = Math.floor(Math.random() * tracks.length);
    const newTrack = tracks[randomTrack];
    dispatch(setCurrentTrack(newTrack));
    console.log(newTrack, randomTrack);
    
  };

  const selectOptions = userPlaylists.map(playlist => (
    <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
  ));
  const handleCreateGame = () => {
    socket.emit('CREATE');
    socket.on('GAME', generatedGameId => {
      console.log(generatedGameId);
      history.push(`/game/${generatedGameId}`);});
  };
  const handleJoinGame = () => {
    socket.emit('JOIN', { gameId });
    socket.on('JOIN_SUCCESS', joinedGameId => {
      console.log(joinedGameId);
      history.push(`/game/${joinedGameId}`);});
  };

  return (

    <div>
      New Game page
      <div>
        <form onSubmit={handleSubmit}>
          <select
            onChange={handleChange}
            name="userPlaylists"
            value={currentPlaylist}
          >
            {!currentPlaylist ? <option>Select Playlist</option> : ''}
            {selectOptions}
          </select>
          <button disabled={!currentPlaylist}>Play</button>
        </form>
      </div>
      <div>
        <button
          onClick={handleCreateGame}
        >Create Game</button>
      </div>
      <div>
        <input
          name="gameId"
          value={gameId}
          onChange={handleChange}>
        </input>
        <button
          onClick={handleJoinGame}
        >Join Game</button>
      </div>
      
      <Game />
      
    </div>
  );
};

export default NewGame;
