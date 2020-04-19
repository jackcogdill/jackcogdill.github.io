import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './Home.css';
import Headshot from './images/closeup.jpg';
import Resume from './files/cv.pdf';

const A = ({ children, ...props }) => (
  <a target="_blank" rel="noopener noreferrer" {...props}>
    {children}
  </a>
);

A.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]).isRequired,
};

const Photo = () => (
  <div className="photo">
    <div
      className="photo-image"
      style={{ backgroundImage: `url(${Headshot})` }}
    />
  </div>
);

const About = () => (
  <div className="about">
    <p>
      Hi there!
    </p>
    <p>
      I am a recent graduate of
      {' '}
      <A href="https://vt.edu/">
        Virginia Tech
      </A>
      {' '}
      where I studied Computer Science and Japanese.
      Currently I live in the
      {' '}
      <A href="https://www.google.com/maps/place/San+Francisco+Bay+Area,+CA">
        South Bay
      </A>
      {' '}
      and am a front-end software engineer at
      {' '}
      <A href="https://about.google/">
        Google
      </A>
      .
    </p>
    <p>
      I have a lot of
      {' '}
      <Link to="/allergies">
        food allergies
      </Link>
      .
    </p>
    <p>
      Feel free to
      {' '}
      <A href="mailto:hi@jackcogdill.com">
        email
      </A>
      {' '}
      me; happy to chat about books, anime, or anything else really.
    </p>
    <p>
      Other links:
    </p>
    <div className="contact-links">
      <A href={Resume}>
        résumé
      </A>
      <A href="https://github.com/jackcogdill">
        GitHub
      </A>
      <A href="https://codepen.io/jackcogdill">
        CodePen
      </A>
      <A href="https://www.linkedin.com/in/jackcogdill/">
        LinkedIn
      </A>
    </div>
  </div>
);

const Home = () => (
  <div className="home">
    <Photo />
    <About />
  </div>
);

export default Home;
