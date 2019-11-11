import {
  SET_USER,
  UPDATE_USER,
  LOGOUT_USER,
  SET_CURRENT_LOGGED_IN_USER
} from "../actions/types";

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.data;
    case UPDATE_USER:
      return action.data;
    case LOGOUT_USER:
      return null;
    case SET_CURRENT_LOGGED_IN_USER:
      if (!state) {
        return { ...state, user: action.payload };
      }
      return state;
    default:
      return state;
  }
};
