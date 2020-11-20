import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './ScoreBoard.css';

const ScoreBoard = () => {
  const {
    game,
    socket
  } = useSelector(state => state);
  const players = game.players;
  const [gameOver, setGameOver] = useState(false);
  useEffect(() => {
    socket.on('WINNER', () => {
      setGameOver(true);
    });
  });
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
      <div className={gameOver ? styles.winner : styles.scores}>
        <h3>SCOREBOARD:</h3>
        <ol>{scores}</ol>
        <a href="/">New game</a>
      </div>
      
    </div>
  );
};

export default ScoreBoard;
