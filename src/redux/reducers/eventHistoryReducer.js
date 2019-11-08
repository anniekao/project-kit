import { SET_EVENT_HISTORY } from '../actions/types';

const initialState = {
  events: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EVENT_HISTORY:
      return {
        ...state,
        events: action.payload
      };

    default:
      return state;
  }
}
