/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calender.style.css";
import { connect } from "react-redux";
import { ACTION_SET_USER_EVENT_CALENDER } from "../../redux/actions/userCalenderAction";

const localizer = momentLocalizer(moment);

const MyCalendar = ({ ACTION_SET_USER_EVENT_CALENDER, userCalendar}) => {
  useEffect(() => {
    ACTION_SET_USER_EVENT_CALENDER(4);
  }, []);

  console.log('reder + ' + JSON.stringify(userCalendar))

  return (
    <div style={{ height: "500pt" }}>
      <Calendar
        events={userCalendar ? userCalendar : []}
        startAccessor="start"
        endAccessor="end"
        localizer={localizer}
        style={{ height: '55vh' }}
        views={["month", "day"]}
        onSelectEvent={event => console.log("clicked event", event)}
        onSelectSlot={slot => console.log("create event here", slot)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userCalendar: state.userCalendar,
    token: state.token
  }
}
const mapDispatchToProps = dispatch => {
  return {
    ACTION_SET_USER_EVENT_CALENDER: userId =>
      dispatch(ACTION_SET_USER_EVENT_CALENDER(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyCalendar);
