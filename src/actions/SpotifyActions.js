import { getPlaylistTracks, getUserPlaylists } from '../services/spotifyAPI';

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

export const SET_TRACKS = 'SET_TRACKS';
export const setTracks = tracks => ({
  type:SET_TRACKS,
  payload: tracks
});


export const fetchUserPlaylists = token => dispatch => {
  getUserPlaylists(token)
    .then(playlists => dispatch(setUserPlaylists(playlists)));
};

export const fetchPlaylistTracks = (token, playlistId) => dispatch => {
  getPlaylistTracks(token, playlistId)
    .then(tracks => dispatch(setTracks(tracks)));
};


