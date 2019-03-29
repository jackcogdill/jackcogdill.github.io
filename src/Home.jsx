import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Home.css';
import FancyHeader from './FancyHeader';
import Headshot from './images/closeup.jpg';
import Resume from './files/cv.pdf';

const Profile = () => (
  <div className="profile">
    <div className="profile-image-wrapper">
      <div
        className="profile-image"
        style={{ backgroundImage: `url(${Headshot})` }}
      />
    </div>
    <div className="profile-title">
      {"Hi! I'm Jack."}
    </div>
  </div>
);

const Location = () => (
  <div className="location">
    <div className="location-marker">
      <FontAwesomeIcon icon="map-marker-alt" color="#ff007f" />
    </div>
    <div className="locations">
      <div>
        Charlotte
      </div>
      <div>
        Blacksburg
      </div>
      <div>
        Mountain View
      </div>
    </div>
  </div>
);

const Info = () => (
  <div className="info">
    <div className="info-description">
      <p>
        {"I'm "}
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

const Contact = ({ isMobile }) => (
  <div className="contact">
    <FancyHeader isMobile={isMobile}>
      {"Let's get in touch!"}
    </FancyHeader>
    <div className="contact-links">
      <a href="mailto:hi@jackcogdill.com">
        Email
      </a>
      <a href="https://github.com/jackcogdill">
        Github
      </a>
      <a href={Resume}>
        Resume
      </a>
      <a href="https://www.instagram.com/jackcogdill/">
        Instagram
      </a>
    </div>
  </div>
);

Contact.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

const Home = ({ isMobile }) => (
  <div className="home">
    <Profile />
    <Location />
    <Info />
    <Contact isMobile={isMobile} />
  </div>
);

Home.propTypes = {
  isMobile: PropTypes.bool.isRequired,
};

export default Home;
