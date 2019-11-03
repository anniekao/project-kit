import { FETCH_EVENT_FEED } from '../actions/types';

const initialState = {
  events: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENT_FEED:
      return {
        ...state,
        events: action.payload
      };

    default:
      return state;
  }
}
