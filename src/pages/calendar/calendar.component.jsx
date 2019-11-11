/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.style.css";
import { connect } from "react-redux";
import { ACTION_SET_USER_EVENT_CALENDAR } from "../../redux/actions/userCalendarAction";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ ACTION_SET_USER_EVENT_CALENDAR, userCalendar, token, user}) => {
  useEffect(() => {
    ACTION_SET_USER_EVENT_CALENDAR(user.id, token);
  }, []);

  // console.log('reder + ', userCalendar)

  return (
    <div style={{ height: "500pt" }}>
      <Calendar
        events={userCalendar ? userCalendar : []}
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
    userCalendar: state.userCalendar,
    token: state.token,
    user: state.user
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ACTION_SET_USER_EVENT_CALENDAR: (userId, token) =>
      dispatch(ACTION_SET_USER_EVENT_CALENDAR(userId, token))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCalendar);