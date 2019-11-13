import { combineReducers } from "redux";
import eventFeedReducer from "./eventFeedReducer";
import eventHistoryReducer from "./eventHistoryReducer";
import eventContactsReducer from "./eventContactsReducer";
import signupReducer from "./signupReducer";
import usersReducer from "./usersReducer";
import userReducer from "./userReducer";
import tokenReducer from "./tokenReducer";
import userCalendarReducer from "./userCalendarReducer";

export default combineReducers({
  eventFeed: eventFeedReducer,
  eventHistory: eventHistoryReducer,
  contacts: eventContactsReducer,
  signupState: signupReducer,
  users: usersReducer,
  user: userReducer,
  token: tokenReducer,
  userCalendar: userCalendarReducer
});
