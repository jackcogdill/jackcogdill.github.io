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

function handleKeyDown(event) {
  if ([event.keyCode, event.which].includes(13)) {
    scrollDown();
  }
}

function getScrollTop() {
  const doc = document.documentElement || document.body.parentNode || document.body;
  const scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : doc.scrollTop;
  return scrollTop;
}

function handleScroll() {
  const arrow = document.getElementById('header-arrow');
  arrow.style.opacity = (getScrollTop() === 0) ? 1 : 0;
}

class Header extends Component {
  componentWillMount() {
    window.addEventListener('scroll', handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', handleScroll);
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
          onKeyDown={handleKeyDown}
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
