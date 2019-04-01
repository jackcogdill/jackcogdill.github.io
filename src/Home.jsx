import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Home.css';
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

const locations = {
  Charlotte: 'https://www.google.com/maps/place/Charlotte,+NC',
  Blacksburg: 'https://www.google.com/maps/place/Blacksburg,+VA',
  'Mountain View': 'https://www.google.com/maps/place/Mountain+View,+CA',
};

const Location = () => (
  <div className="location">
    <div className="location-marker">
      <FontAwesomeIcon icon="map-marker-alt" color="#ff007f" />
    </div>
    <div className="location-links">
      {
        Object.entries(locations)
          .map(([loc, link]) => (
            <div className="location-link">
              <a href={link} target="_blank" rel="noopener noreferrer">
                {loc}
              </a>
            </div>
          ))
      }
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

const ContactLink = ({ text, href, external }) => (
  <div className="contact-link">
    {
      external ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {text}
          {' '}
          <FontAwesomeIcon icon="external-link-alt" />
        </a>
      ) : (
        <a href={href}>
          {text}
        </a>
      )
    }
  </div>
);

ContactLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  external: PropTypes.bool,
};

ContactLink.defaultProps = {
  external: false,
};

const Contact = () => (
  <div className="contact">
    <div className="contact-header">
      <div>
        {"Let's get in touch!"}
      </div>
    </div>
    <div className="contact-links">
      <ContactLink text="Email" href="mailto:hi@jackcogdill.com" />
      <ContactLink text="Resume" href={Resume} />
      <ContactLink external text="Github" href="https://github.com/jackcogdill" />
      <ContactLink external text="Instagram" href="https://www.instagram.com/jackcogdill/" />
    </div>
  </div>
);

const Home = () => (
  <div className="home">
    <Profile />
    <Location />
    <Info />
    <Contact />
  </div>
);

export default Home;
