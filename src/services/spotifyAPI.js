const url = process.env.SPOTIFY_API_URL;

export const getUserPlaylists = token => {
  return fetch(`${url}me/playlists`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(json => json.items.map(item => ({ id:item.id, name:item.name }))); 
};

export const getPlaylistTracks = (token, playlistId) => {
  // eslint-disable-next-line max-len
  return fetch(`${url}playlists/${playlistId}/tracks?market=US&fields=items(track(name%2Cartists%2Cpreview_url%2Calbum(name%2Cimages%2Crelease_date)))`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(json => json.items)
    .then(tracks => tracks.map(track => ({ ...track.track })))
    .then(list => list.filter(track => track.preview_url));
};

export const getUserName = (token) => {
  return fetch(`${url}me/`, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(res => res.json())
    .then(json => json.display_name);
};
