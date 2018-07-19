import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FancyHeader from './FancyHeader';
import TimelineElem from './Timeline';
import './App.css';

import Profile from './images/closeup.jpg';
import Faithlife from './images/faithlife.png';
import HackAttack from './images/hackattack.jpg';

const Header = () => (
  <div className="header">
    <div className="header-image-wrapper">
      <div
        className="header-image"
        style={{ backgroundImage: `url(${Profile})` }}
      />
    </div>
    <div className="header-title">
      {"Hi! I'm Jack."}
    </div>
    <div className="header-description">
      {"I'm a student at"}
      {' '}
      <a href="https://vt.edu/">
        Virginia Tech
      </a>
      {' '}
      studying Computer Science and Japanese.
    </div>
  </div>
);

const Footer = ({ isMobile }) => (
  <footer className="footer">
    <FancyHeader isMobile={isMobile}>
      {"Let's Get in Touch!"}
    </FancyHeader>
    <div className="footer-links">
      <a href="mailto:jackcog@vt.edu">
        Email
      </a>
      <a href="https://github.com/jackcogdill">
        Github
      </a>
      <a href="files/cv.pdf">
        Resume
      </a>
      <a href="https://www.instagram.com/jackcogdill/">
        Instagram
      </a>
    </div>
    <div className="footer-credits">
      <a href="https://github.com/jackcogdill/jackcogdill.github.io/tree/dev">
        Hand-coded with ♡ by Jack Cogdill
      </a>
    </div>
  </footer>
);

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const Timeline = () => (
  <div className="timeline">
    <TimelineElem
      image={Faithlife}
      title="Faithlife"
      location="Bellingham, Washington"
      date="Summer 2017"
    >
      <p>
        The people at Faithlife taught me the value of constant learning.
        During this internship I got coffee with employees from nearly every department
        (including the CEO), learned JavaScript Promises, read books on business, and learned
        how to steam milk for the perfect latte. Along with some of the friendliest coworkers
        and interns, I will never forget my time at Faithlife.
      </p>
      <a href="https://faithlife.com/about">
        Website
      </a>
    </TimelineElem>
    <TimelineElem
      image={HackAttack}
      title="Hack Attack"
      location="University of Maryland & Virginia Tech"
      date="April 2017"
    >
      <div>
        <p>
          At my first-ever hackathon, Bitcamp, our team created Hack Attack: a website with 1-on-1
          programming challenges designed to teach Python.
        </p>
        <p>
          A few weeks later, our club, Hackers at VT, decided to use the site for an event
          we were hosting with Facebook. In preparation, we made numerous cryptography and
          capture the flag challenges, as well as redesigned the site. At the event, we had a
          tournament-style bracket with over 95 students who participated.
        </p>
        <p>
          {"This is the most fun project I've worked on to date, just because so many people were able to enjoy it."}
        </p>
      </div>
      <a href="https://github.com/jackcogdill/FB-hack-attack">
        Code
      </a>
      <a href="https://bit.camp/">
        Bitcamp
      </a>
    </TimelineElem>
  </div>
);

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
      <div className="App">
        <Header />
        <div className="content">
          <FancyHeader isMobile={isMobile}>
            {"Here's what I've done"}
          </FancyHeader>
          <Timeline />
        </div>
        <Footer isMobile={isMobile} />
      </div>
    );
  }
}

export default App;
