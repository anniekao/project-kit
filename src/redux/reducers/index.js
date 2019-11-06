import { combineReducers } from "redux";
import eventFeedReducer from "./eventFeedReducer";
import eventHistoryReducer from "./eventHistoryReducer";
import signupReducer from "./signupReducer";
import usersReducer from "./usersReducer"; 
import userReducer from "./userReducer";
import tokenReducer from './tokenReducer';

export default combineReducers({
  eventFeed: eventFeedReducer,
  eventHistory: eventHistoryReducer,
  signupState: signupReducer,
  users: usersReducer,
  user: userReducer,
  token: tokenReducer
});
