import React from 'react';
import { useSelector } from 'react-redux';
import styles from './ScoreBoard.css';

const ScoreBoard = () => {
  const game = useSelector(state => state.game);
  const players = game.players;

  const scores = players.sort((a, b) => {
    return b.score - a.score;
  }).map(player => (
    <li key={player.id}>
      <span>{player.user}:</span> 
      <span> {player.score} points</span>
    </li>));
 
  return (
    <div className={styles.scoreboard}>
      <h3 className={styles.rounds}>Round {game.round} of 5</h3>
      <div className={styles.scores}>
        <h3>SCOREBOARD:</h3>
        <ol>{scores}</ol>
      </div>
      
    </div>
  );
};

export default ScoreBoard;
