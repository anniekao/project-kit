import React from 'react';

import './event-feed-item.style.css';

const EventFeedItem = ({ logoURL, title, startTime, venueName, address }) => {
  return (
    <div>
      <img src={logoURL} alt={title} />
      <h3>{title}</h3>
      <p>{startTime}</p>
      <p>
        {venueName} {address}
      </p>
    </div>
  );
};

export default EventFeedItem;
