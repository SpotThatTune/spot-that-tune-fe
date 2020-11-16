import { getUserPlaylists } from '../services/spotifyAPI';

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = token => ({
  type:SET_TOKEN,
  payload: token
});

export const SET_USER_PLAYLISTS = 'SET_USER_PLAYLISTS';
export const setUserPlaylists = playlists => ({
  type:SET_USER_PLAYLISTS,
  payload: playlists
});

export const fetchUserPlaylists = token => dispatch => {
  getUserPlaylists(token)
    .then(playlists => dispatch(setUserPlaylists(playlists)));
};
