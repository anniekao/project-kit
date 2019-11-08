import { INIT_USERS, UPDATE_USER } from '../actions/types';

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case INIT_USERS:
      return action.data
    case UPDATE_USER:
      return state.map(user => user.id === action.data.id ? action.data : user);
    default:
      return state;
  }
}