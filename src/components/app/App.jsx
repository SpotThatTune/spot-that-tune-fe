import React from 'react';
import SocketComponent from '../app/test-components/SocketComponent';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import LandingPage from '../landing/LandingPage';
import './App.css';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/socket" component={SocketComponent} />
          <Route exact path="/" component={LandingPage} />
        </Switch>
      </Router>
    </>
  );
}
