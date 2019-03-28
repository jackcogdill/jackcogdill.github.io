import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Home.css';
import FancyHeader from './FancyHeader';
import Profile from './images/closeup.jpg';

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
      <br />
      <br />
      I also have a lot of
      <Link to="/allergies">
        food allergies
      </Link>
      .
    </div>
  </div>
);

const Footer = ({ isMobile }) => (
  <footer className="footer">
    <FancyHeader isMobile={isMobile}>
      {"Let's get in touch!"}
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
        Hand-coded with &lt;3
      </a>
    </div>
  </footer>
);

Footer.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const Home = ({ isMobile }) => (
  <div className="home">
    <Header />
    <Footer isMobile={isMobile} />
  </div>
);

Home.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Home;
