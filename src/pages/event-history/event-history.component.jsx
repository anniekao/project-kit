import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getEventHistory } from '../../redux/actions/eventHistoryActions';

import './event-history.style.css';

const EventHistoryPage = ({ user, events, getEventHistory }) => {
  useEffect(() => {
    if (user) {
      getEventHistory(user.id);
    }
  }, [user, getEventHistory]);

  const eventHistory = events.map(event => {
    return (
      <div key={event.id}>
        <p>{event.name}</p>
        <p>{event.date}</p>
      </div>
    );
  });

  return (
    events.length > 0 ? eventHistory : <div>LOADING</div>
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
