import React from 'react';
import { Link } from 'react-router-dom';

import './event-feed-item.style.css';

const EventFeedItem = ({ logoURL, title, startTime, venueName, address, description }) => {
  return (
    <div>
      <img src={logoURL} alt={title} />
      <h3>{title}</h3>
      <p>{startTime}</p>
      <p>
        {venueName} {address}
      </p>
      <p>
        <Link
          to={{
            pathname: '/event/details',
            state: {
              fromHome: true,
              logoURL,
              title,
              startTime,
              venueName,
              address,
              description
            }
          }}
        >
          Details
        </Link>
      </p>
    </div>
  );
};

export default EventFeedItem;
