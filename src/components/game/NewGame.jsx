import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchUserPlaylists, setToken } from '../../actions/SpotifyActions';


const NewGame = () => {
  const userPlaylists = useSelector(state => state.userPlaylists);
  const token = useSelector(state => state.token);
  const dispatch = useDispatch();

  const [currentPlaylist, setCurrentPlaylist] = useState('');
  
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
    setCurrentPlaylist(target.value);
  };
  const selectOptions = userPlaylists.map(playlist => (
    <option key={playlist.id} value={playlist.id}>{playlist.name}</option>
  ));
  return (

    <div>
      New Game page
      <select
        onChange={handleChange}
        name="userPlaylists"
        value={currentPlaylist}
      >
        {selectOptions}
      </select>
    </div>
  );
};

export default NewGame;