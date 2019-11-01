import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchEventFeed } from '../../redux/actions/feedActions';

import './home.style.css';

const HomePage = ({ fetchEventFeed, events }) => {
  const testAPI = () => {
    fetchEventFeed();
  };

  return (
    <div>
      <button onClick={testAPI}>Test</button>
      Home Page
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
)(HomePage);
