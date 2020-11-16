import { SET_USER_PLAYLISTS, SET_TOKEN } from '../actions/SpotifyActions';

const initialState = {
  user:'',
  token:'',
  currentSong:null,
  playlistId:'',
  userPlaylists:[],
  songs:[],
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case SET_TOKEN:
      return { ...state, token:action.payload };
    case SET_USER_PLAYLISTS:
      return { ...state, userPlaylists:action.payload };
    default:
      return state;
  }
}
