import { INIT_USERS } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_USERS:
      return action.data
    default:
      return state;
  }
}