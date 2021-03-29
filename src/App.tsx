import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router';
import Home from './components/Home';
import paths from './paths';

function App() {
  return (
    <Switch>
      <Route path={paths.home} component={Home} exact />
      <Redirect to={paths.home} />
    </Switch>
  );
}

export default App;
