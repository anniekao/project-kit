import React from 'react';

import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import { logoutUser } from '../../redux/actions/userAction';
import { clearToken } from '../../redux/actions/tokenAction';

import './landing.style.css';

const LandingPage = ({ user, token, logoutUser, clearToken, history }) => {
  const handleLogout = () => {
    logoutUser();
    clearToken();
    history.push('/login')
  }

  return (
    <div>
      Landing Page
      <button onClick={handleLogout}>Logout</button>
      <button onClick={() => history.push(`/profile/${user.id}`)}>Profile</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    user: state.user,
    token: state.token
  }
};

const mapDispatchToProps = {
  logoutUser,
  clearToken
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LandingPage));