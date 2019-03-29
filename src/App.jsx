import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Allergies from './Allergies';
import Home from './Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  componentWillMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  // Thank you https://goshakkk.name/different-mobile-desktop-tablet-layouts-react/
  handleResize = () => {
    this.setState({
      width: window.innerWidth,
    });
  }

  render() {
    const { width } = this.state;
    const isMobile = width <= 768;

    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" render={() => <Home isMobile={isMobile} />} />
            <Route exact path="/allergies" component={Allergies} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
