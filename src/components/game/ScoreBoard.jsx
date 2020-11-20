import React from 'react';
import { useSelector } from 'react-redux';

const ScoreBoard = () => {
  const game = useSelector(state => state.game);
  const players = game.players;

  const scores = players.sort((a, b) => {
    return b.score - a.score;
  }).map(player => (
    <li key={player.id}>
    Name {player.user} 
    Score: {player.score}</li>));
 
  return (
    <div>
      <h3>Round {game.round} of 5</h3>
      <h3>Scores:</h3>
      <ol>{scores}</ol>
    </div>
  );
};

export default ScoreBoard;
