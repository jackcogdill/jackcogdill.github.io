import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="header">
          <h1 className="header-title">My name is Jack Cogdill.</h1>
          <h2 className="header-description">I'm a student at <a href="https://vt.edu/" target="_blank" rel="noopener noreferrer">Virginia Tech</a> studying Computer Science.</h2>
        </header>
        <div className="content">
          <p className="intro">
            Welcome to my website. I hope you enjoy your stay.
          </p>
        </div>
        <footer className="footer">
          <span>Jack Cogdill</span>
          <div className="footer-links">
            <a href="mailto:jackcog@vt.edu" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://github.com/jackcogdill" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="files/cv.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <a href="https://www.instagram.com/jackcogdill/" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
