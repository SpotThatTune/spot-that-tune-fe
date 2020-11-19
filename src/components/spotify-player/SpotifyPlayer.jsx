import React, { useEffect, useState } from 'react';
const SWAPI = require('spotify-web-api-js');
const s = new SWAPI();
const token = 'BQB9HhMDhignDQyGhSHuDsaP7oM7uXXQxM2PUG3lrnkRbLetVpQ_wivGF-YMb4_Gedh83_5IwySvqwbZmWWPs4ULxPkoXA_MO3whiU82a-gCsAtr56nu7ZOUuz3XogW8ggYWAhsRarsNdBAfvG0mwuG1DBSxELlsqXZ8OcH-cdtbvH1oZgeXGtw';

const SpotifyPlayer = () => {
  s.setAccessToken(token);

  const uri = 'https://open.spotify.com/track/7wSco4c7DSaTvcrryRmy6S';
  function play(device_id, _token, uri) {
    fetch(`https://api.spotify.com/v1/me/player/play?device_id=${device_id}`, {
      method: 'PUT',
      body: `{"uris": ["${uri}"]}`,
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    });
  }

  function pause(device_id, _token) {
    fetch(`https://api.spotify.com/v1/me/player/pause?device_id=${device_id}`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${_token}`
      }
    });
  }
  const [spotifyReady, setSpotifyReady] = useState(false);
  const [deviceId, setDeviceId] = useState('');

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://sdk.scdn.co/spotify-player.js';
    script.async = true;
    document.body.appendChild(script);
    window.onSpotifyWebPlaybackSDKReady = () => {
      setSpotifyReady(true);
    };
    return () => {
      script.remove();
    };
  }, []);

  useEffect(() => {
    if(!spotifyReady) return;

    // eslint-disable-next-line no-undef
    const player = new Spotify.Player({
      name: 'Web Playback SDK Template',
      getOAuthToken: cb => { cb(token); },
      volume: 0.5
    });
    
    // Error handling
    player.on('initialization_error', e => console.error(e));
    player.on('authentication_error', e => console.error(e));
    player.on('account_error', e => console.error(e));
    player.on('playback_error', e => console.error(e));
    

    player.addListener('ready', data => {
      setDeviceId(data.device_id);
    });

    player.connect();

    return () => {
      player.removeListener('initialization_error');
      player.removeListener('authentication_error');
      player.removeListener('account_error');
      player.removeListener('playback_error');
      player.removeListener('player_state_changed');
      player.removeListener('ready');
      player.disconnect();
    };
  }, [spotifyReady, token]);
  const handlePlay = () => {
    play(deviceId, token, uri);
  };
  const handlePause = () => {
    pause(deviceId, token, uri);
  };
  return (
    <div>
      <button onClick={handlePlay} >Play</button>
      <button onClick={handlePause} >Pause</button>
    </div>
  );
};

export default SpotifyPlayer;
