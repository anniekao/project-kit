import * as actionTypes from "./types";
import { getUserEventCalendar } from "../../services/calendar";

const ACTION_SET_USER_EVENT_CALENDAR = (userId, token) => {
  return async dispatch => {
    const userEvents = await getUserEventCalendar(userId, token);
    userEvents.data.forEach(obj => {
      obj.start = new Date(obj.start)
      obj.end = new Date(obj.end)
    })
    // console.log(userEvents.data)
    dispatch({
      type: actionTypes.SET_USER_EVENT_CALENDAR,
      payload: userEvents.data
    });
  };
};

export { ACTION_SET_USER_EVENT_CALENDAR };
