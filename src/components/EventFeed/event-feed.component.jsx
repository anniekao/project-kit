import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEventFeed } from '../../redux/actions/eventFeedActions';

import EventFeedItem from './EventFeedItem/event-feed-item.component';

import './event-feed.style.css';

const EventFeed = ({ fetchEventFeed, events }) => {
  const testAPI = () => {
    fetchEventFeed();
  };

  // TODO: set up useEffect to automatically fetch
  // useEffect(() => {
  //   fetchEventFeed();
  // }, [fetchEventFeed])

  const eventItems = events.map(event => {
    return (
      <EventFeedItem
        logoURL={event.logo.url}
        title={event.name.text}
        startTime={event.start.local}
        venueName={event.venue.name}
        address={event.venue.address.address_1}
        description={event.description.text}
      />
    );
  });

  return (
    <div>
      <button onClick={testAPI}>Test</button>
      {events.length > 0 ? eventItems : <div>LOADING</div>}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    events: state.eventFeed.events
  };
};

export default connect(
  mapStateToProps,
  { fetchEventFeed }
)(EventFeed);
