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
    {
      (children.length > 1)
        ? (
          <div>
            <div className="timeline-content">
              {children[0]}
            </div>
            <div className="timeline-links">
              {children[1]}
            </div>
          </div>
        )
        : (
          <div className="timeline-content">
            {children}
          </div>
        )
    }
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
