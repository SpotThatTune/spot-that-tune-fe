import React from 'react';
import SocketComponent from '../app/test-components/SocketComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from '../landing/LandingPage';
import './App.css';
import About from '../about/About';
import Instructions from '../instructions/Instructions';
import NewGame from '../game/NewGame';
import Game from '../game/Game';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/socket" component={SocketComponent} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/new" component={NewGame} />
          <Route exact path="/game/:id" component={Game} />
          <Route exact path="/about" component={About} />
          <Route exact path="/instructions" component={Instructions} />
        </Switch>
      </Router>
    </>
  );
}
