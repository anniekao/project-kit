import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getEventHistory } from '../../redux/actions/eventHistoryActions';

import './event-history.style.css';

const EventHistoryPage = ({ user, events, getEventHistory }) => {
  useEffect(() => {
    if (user) {
      getEventHistory(user.id);
    }
  }, [user, getEventHistory]);

  const eventItems = events.map(event => {
    return (
      <div key={event.id}>
        <p>{event.name}</p>
        <p>{event.date}</p>
        <p>
        <Link
          to={`/events/${event.id}/contacts`}
        >
          Details
        </Link>
        </p>
      </div>
    );
  });

  return (
    events.length > 0 ? eventItems : <div>LOADING</div>
  );
};

const mapStateToProps = state => {
  return {
    user: state.user,
    events: state.eventHistory.events
  };
};

const mapDispatchToProps = {
  getEventHistory
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EventHistoryPage);
