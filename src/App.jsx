import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

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

const FancyHeader = ({ children, isMobile }) => {
  const className = isMobile ? 'fancy-header-mobile' : 'fancy-header';
  return (
    <h2 className={className}>
      <span>
        {children}
      </span>
    </h2>
  );
};

FancyHeader.propTypes = {
  children: PropTypes.element.isRequired,
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
        </div>
        <Footer isMobile={isMobile} />
      </div>
    );
  }
}

export default App;
