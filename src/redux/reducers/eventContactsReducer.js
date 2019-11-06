import { SET_EVENT_CONTACTS } from '../actions/types';

const initialState = {
  contacts: [],
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_EVENT_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };

    default:
      return state;
  }
}
