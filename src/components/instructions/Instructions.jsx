import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Instructions.css';

const Instructions = () => {
  return (
    <div>
      <h1 className={styles.instructionTitle}>How to play</h1>
      <article>
        <ul>
          <li>A host will create a room, which will generate a room number other players use to join. Host selects number of rounds the game will run</li>
          <li>Enter the room number, and log into Spotify</li>
          <li>Select a playlist to use; this playlist will be used to randomly select songs after you win a round</li>
          <li>When all players have joined, hit the 'ready' button to play the first song sample</li>
          <li>You have 30 seconds to guess each song, from the time it begins playing</li>
          <li>If nobody guesses the song within 30 seconds, another song is selected from the current leaders playlist</li>
          <li>Whoever guesses a song correctly becomes the new 'leader', and a song will be randomly selected from their chosen playlist</li>
          <li>Whoever has the most points at the end of the final round wins!</li>
        </ul>
      </article>
      <Link className={styles.links} to="/" >
      Home
      </Link>
    </div>
  );
};

export default Instructions;
