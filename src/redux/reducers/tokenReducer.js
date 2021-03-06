import { SET_TOKEN, CLEAR_TOKEN } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_TOKEN:
      return action.token;
    case CLEAR_TOKEN:
      return null;
    default:
      return state;
  }
}