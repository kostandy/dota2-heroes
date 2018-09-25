import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { hot } from 'react-hot-loader';

import Navbar from './components/navbar';
import Home from './layouts/Home';

const App = () => (
  <Router>
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={Home} />
      </Switch>
    </div>
  </Router>
);

export default hot(module)(App);
