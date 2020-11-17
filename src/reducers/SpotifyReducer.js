import { 
  SET_USER_PLAYLISTS, 
  SET_TOKEN, 
  SET_TRACKS
} from '../actions/SpotifyActions';

const initialState = {
  user:'',
  token:'',
  currentSong:null,
  playlistId:'',
  userPlaylists:[],
  tracks:[],
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case SET_TOKEN:
      return { ...state, token:action.payload };
    case SET_USER_PLAYLISTS:
      return { ...state, userPlaylists:action.payload };
    case SET_TRACKS:
      return { ...state, tracks:action.payload };
    default:
      return state;
  }
}
