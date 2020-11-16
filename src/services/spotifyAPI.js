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
