import { SET_USER, LOGOUT_USER } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.data
    case LOGOUT_USER:
      return null;
    default:
      return state;
  }
}