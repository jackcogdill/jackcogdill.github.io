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
      <p>
        {"I'm"}
        a recent graduate of Virginia Tech where I studied Computer Science and Japanese.
        Currently I am a software engineer at Google.
      </p>
      <br />
      <p>
        {'I have a lot of '}
        <Link to="/allergies">
          food allergies
        </Link>
        .
      </p>
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
      <a href="/_files/cv.pdf">
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
