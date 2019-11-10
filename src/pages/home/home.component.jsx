import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { connect } from "react-redux";

import "./home.style.css";
import EventFeed from "../../components/EventFeed/event-feed.component";
import { setCurrentUser } from "../../redux/actions/userAction";

const HomePage = ({ setCurrentUser, id }) => {
  useEffect(() => {
    const token = Cookies.get();
    if (token) {
      setCurrentUser(token);
    }
  }, [id]);

  return (
    <>
      <div>Home Page</div>
      <EventFeed />
    </>
  );
};

const mapStateToProps = ({ user }) => user;

const mapDispatchToProps = dispatch => {
  return {
    setCurrentUser: token => dispatch(setCurrentUser(token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
