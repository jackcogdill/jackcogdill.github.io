import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

import Profile from './images/closeup.jpg';

function scrollDown() {
  window.scroll({
    top: window.innerHeight,
    behavior: 'smooth',
  });
}

class Header extends Component {
  componentWillMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const arrow = document.getElementById('header-arrow');
    arrow.style.transition = 'opacity 0.25s ease-in-out';
    arrow.style.opacity = 0;
    window.removeEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
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
        <div
          id="header-arrow"
          className="header-arrow"
          onClick={scrollDown}
          onKeyDown={scrollDown}
          role="button"
          tabIndex={0}
        >
          <FontAwesomeIcon
            icon={faAngleDown}
          />
        </div>
      </div>
    );
  }
}

export default Header;
