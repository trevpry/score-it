import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/header/header.component';
import GamesList from './components/gameslist/gameslist.component';
import GameOverview from './components/game-overview/game-overview.component';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={GamesList} /> 
        <Route exact path='/score-it' component={GamesList} /> 
        <Route path='/games/:gameId' component={GameOverview} />
      </Switch>
    </div>
  );
}

export default App;
