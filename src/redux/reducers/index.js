import { combineReducers } from "redux";
import feedReducer from "./feedReducer";
import singupReducer from "./signupReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  eventFeed: feedReducer,
  singupState: singupReducer,
  loginState: loginReducer
});
