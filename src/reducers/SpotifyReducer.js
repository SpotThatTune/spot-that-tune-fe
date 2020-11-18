import { 
  SET_TOKEN,
  SET_USER_PLAYLISTS, 
  SET_USER,
  SET_TRACKS,
  SET_CURRENT_TRACK,
  SET_GAME
} from '../actions/SpotifyActions';

const initialState = {
  user:'',
  token:'',
  currentTrack:'',
  playlistId:'',
  userPlaylists:[],
  tracks:[],
  game:{}
};

export default function reducer(state = initialState, action){
  switch(action.type){
    case SET_TOKEN:
      return { ...state, token:action.payload };
    case SET_USER:
      return { ...state, user:action.payload };
    case SET_USER_PLAYLISTS:
      return { ...state, userPlaylists:action.payload };
    case SET_TRACKS:
      return { ...state, tracks:action.payload };
    case SET_CURRENT_TRACK:
      return { ...state, currentTrack:action.payload };
    case SET_GAME:
      return { ...state, game:action.payload };
    default:
      return state;
  }
}
