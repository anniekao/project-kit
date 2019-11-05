import { SET_USER } from '../actions/types';

const initialState = null;

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return action.data
    default:
      return state;
  }
}