import * as actionTypes from "../actions/types";

const initialState = {
  userEvents: null
};

const userCalenderReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_USER_EVENT_CALENDER:
      return { ...state, userEvents: action.payload };
    default:
      return state;
  }
};

export default userCalenderReducer;
