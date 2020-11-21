import {
  getPlaylistTracks,
  getUserName,
  getUserPlaylists
} from '../services/spotifyAPI';

export const SET_TOKEN = 'SET_TOKEN';
export const setToken = token => ({
  type:SET_TOKEN,
  payload: token
});

export const SET_USER = 'SET_USER';
export const setUser = user => ({
  type:SET_USER,
  payload: user
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

export const SET_CURRENT_TRACK = 'SET_CURRENT_TRACK';
export const setCurrentTrack = track => ({
  type:SET_CURRENT_TRACK,
  payload: track
});

export const SET_GAME = 'SET_GAME';
export const setGame = game => ({
  type:SET_GAME,
  payload: game
});

export const  SET_SOCKET = 'SET_SOCKET';
export const setSocket = socket => ({
  type:SET_SOCKET,
  payload: socket
});

export const SET_PLAYING = 'SET_PLAYING';
export const setPlaying = playing => ({
  type:SET_PLAYING,
  payload: playing
});

export const fetchUserPlaylists = token => dispatch => {
  getUserPlaylists(token)
    .then(playlists => dispatch(setUserPlaylists(playlists)));
};

export const fetchPlaylistTracks = (token, playlistId) => dispatch => {
  getPlaylistTracks(token, playlistId)
    .then(tracks => dispatch(setTracks(tracks)));
};

export const fetchUserName = token => dispatch => {
  getUserName(token)
    .then(userName => dispatch(setUser(userName)));
};
