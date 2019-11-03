import { combineReducers } from "redux";
import eventFeedReducer from "./eventFeedReducer";
import singupReducer from "./signupReducer";

export default combineReducers({
  eventFeed: eventFeedReducer,
  singupState: singupReducer
});
