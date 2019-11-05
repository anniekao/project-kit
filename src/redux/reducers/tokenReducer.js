import { SET_TOKEN } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch(action.type) {
    case SET_TOKEN:
      return action.token;
    default:
      return state;
  }
}