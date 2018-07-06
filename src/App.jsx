import React, { Component } from 'react';
import PropTypes from 'prop-types';

import FancyHeader from './FancyHeader';
import TimelineElem from './Timeline';
import './App.css';

import Faithlife from './images/faithlife.png';

const Header = () => (
  <header className="header">
    <h1 className="header-title">
      {"Hi! I'm Jack."}
    </h1>
    <h2 className="header-description">
      {"I'm a student at"}
      {' '}
      <a href="https://vt.edu/">
        Virginia Tech
      </a>
      {' '}
      studying Computer Science and Japanese.
    </h2>
  </header>
);

const Footer = ({ isMobile }) => (
  <footer className="footer">
    {!isMobile && (
      <span>
        Jack Cogdill
      </span>
    )}
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
  </footer>
);

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

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
          <TimelineElem
            image={Faithlife}
            title="Faithlife"
            date="Summer 2017"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Auctor urna nunc id cursus metus aliquam.
              Ornare massa eget egestas purus viverra. Diam maecenas ultricies mi eget mauris.
              Lacus luctus accumsan tortor posuere ac. Leo in vitae turpis massa sed elementum.
              Quis enim lobortis scelerisque fermentum dui. Ultrices dui sapien eget mi proin sed.
              Viverra suspendisse potenti nullam ac tortor vitae purus. Eget dolor morbi non arcu
              risus quis. A lacus vestibulum sed arcu.
            </p>
            <div>
              <a href="https://faithlife.com/about">
                Website
              </a>
            </div>
          </TimelineElem>
        </div>
        <Footer isMobile={isMobile} />
      </div>
    );
  }
}

export default App;
