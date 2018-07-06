import React from 'react';
import PropTypes from 'prop-types';

import './Timeline.css';

const TimelineElem = ({
  image, title, date, children,
}) => (
  <div className="timeline-elem">
    <div
      className="timeline-image"
      style={{ backgroundImage: `url(${image})` }}
    />
    <div className="timeline-title">
      {title}
    </div>
    <div className="timeline-text">
      {children}
    </div>
    <div className="timeline-date">
      <span>
        {date}
      </span>
    </div>
  </div>
);

TimelineElem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default TimelineElem;
