import React from 'react';
import logo from '../../../public/assets/spot-that-tune-logo.png';
import SpotifyOAuth from '../spotifyauth/SpotifyOAuth';
import FooterNav from '../footer/FooterNav';

export const LandingPage = () => {
    
  return (
    <>
      <header>
        <h1>SPOT THAT TUNE</h1>
      </header>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <SpotifyOAuth />
      <FooterNav />
                
    </>
  );
    
};

export default LandingPage;
