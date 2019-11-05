import { combineReducers } from "redux";
import eventFeedReducer from "./eventFeedReducer";
import signupReducer from "./signupReducer";
import usersReducer from "./usersReducer"; 
import userReducer from "./userReducer";
import tokenReducer from './tokenReducer';

export default combineReducers({
  eventFeed: eventFeedReducer,
  signupState: signupReducer,
  users: usersReducer,
  user: userReducer,
  token: tokenReducer
});
