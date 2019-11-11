/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calender.style.css";
import { connect } from "react-redux";
import { ACTION_SET_USER_EVENT_CALENDER } from "../../redux/actions/userCalenderAction";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ ACTION_SET_USER_EVENT_CALENDER, userEvents, token, user}) => {
  useEffect(() => {
    ACTION_SET_USER_EVENT_CALENDER(user.id, token);
  }, []);

  console.log('reder + ' + JSON.stringify(userEvents))

  return (
    <div style={{ height: "500pt" }}>
      <Calendar
        events={userEvents ? userEvents : []}
        startAccessor="start"
        endAccessor="end"
        localizer={localizer}
        // date={new Date()}
        style={{ height: '55vh' }}
        views={["month", "day"]}
        onSelectEvent={event => console.log("clicked event", event)}
        onSelectSlot={slot => console.log("create event here", slot)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userEvents: state.userCalenderState,
    token: state.token,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ACTION_SET_USER_EVENT_CALENDER: (userId, token) =>
      dispatch(ACTION_SET_USER_EVENT_CALENDER(userId, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCalendar);