import React from 'react';
import PropTypes from 'prop-types';
import './FancyHeader.css';

const FancyHeader = ({ children, isMobile }) => {
  const className = isMobile ? 'fancy-header-mobile' : 'fancy-header';
  return (
    <div className={className}>
      <span>
        {children}
      </span>
    </div>
  );
};

FancyHeader.propTypes = {
  children: PropTypes.element.isRequired,
  isMobile: PropTypes.bool.isRequired,
};

export default FancyHeader;
