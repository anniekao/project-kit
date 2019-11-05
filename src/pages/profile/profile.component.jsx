import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

const Profile = ({ user, users }) => {

    return (
    <div>
      <p>Name: {user.first_name + " " + user.last_name}</p>
      <p>{user.bio}</p>
      <p>Occupation: {user.occupation}</p>
      <p>Company: {user.company} </p>
      <div>
        Contact Info:
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    user: state.user
  }
}


export default connect(mapStateToProps)(Profile)