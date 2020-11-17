import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaylistTracks, fetchUserPlaylists, setToken } from '../../actions/SpotifyActions';


const NewGame = () => {
  const userPlaylists = useSelector(state => state.userPlaylists);
  const token = useSelector(state => state.token);
  const tracks = useSelector(state => state.tracks);
  const dispatch = useDispatch();

  const [currentPlaylist, setCurrentPlaylist] = useState(null);
  
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
  const handleChange = ({ target }) => {
    setCurrentPlaylist({ 
      id:target.value, 
      name:target.name });
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(fetchPlaylistTracks(token, currentPlaylist.id));
  };

  const selectOptions = userPlaylists.map(playlist => (
    <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
  ));

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
      
    </div>
  );
};

export default NewGame;
