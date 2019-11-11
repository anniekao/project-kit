import * as actionTypes from "../actions/types";

const initialState = null;

const userCalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_EVENT_CALENDAR:
      return action.payload;
    default:
      return state;
  }
};

export default userCalendarReducer;
