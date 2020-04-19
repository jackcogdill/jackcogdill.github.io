import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Allergies from './Allergies';
import Home from './Home';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/allergies" component={Allergies} />
      </Switch>
    </div>
  </Router>
);

export default App;
