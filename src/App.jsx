import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

import './App.css';
import Allergies from './Allergies';
import Home from './Home';

library.add(faMapMarkerAlt);

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
