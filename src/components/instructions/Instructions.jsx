/* eslint-disable max-len */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Instructions.css';

const Instructions = () => {
  return (
    <div >
      <h1 className={styles.instructionTitle}>HOW TO PLAY</h1>
      <article>
        <ul className={styles.content}>
          <li>Choose a playlist before creating or joining a room </li>
          <li>
            If you create a room, be sure to share the room name with other players.
          </li>
          <li>Now that all players have entered the room the Host can start the game by clicking "New Song" and then clicking "Play" </li>
          <li>Users will now have the chance to guess the song name</li>
          <li>Whoever guesses a song correctly becomes the new 'leader', and a song will be randomly selected from their chosen playlist</li>
          <li>Whoever has the most points at the end of the final round wins!</li>
        </ul>
        
      </article>
      <h1 className={styles.instructionTitle}>HAVE FUN!</h1>
      <Link className={styles.links} to="/" >
      Home
      </Link>
    </div>
  );
};

export default Instructions;
