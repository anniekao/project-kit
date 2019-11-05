import React from 'react';
import { Redirect } from 'react-router-dom';

import './event-details.style.css';

const EventDetailsPage = props => {
  const {
    fromHome,
    logoURL,
    title,
    startTime,
    venueName,
    address,
    description
  } = props.location.state;

  if (!fromHome) {
    return <Redirect to="/home" />;
  }

  return (
    <>
      <div>
        <img src={logoURL} alt={title} />
        <h3>{title}</h3>
        <p>{startTime}</p>
        <p>
          {venueName} {address}
        </p>
        <p>{description}</p>
      </div>
    </>
  );
};

export default EventDetailsPage;
