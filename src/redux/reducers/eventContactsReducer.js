import { SET_ALL_CONTACTS } from '../actions/types';
import { SET_EVENT_CONTACTS } from '../actions/types';

const initialState = {
  eventContacts: [],
  allContacts: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_ALL_CONTACTS:
      return {
        ...state,
        allContacts: action.payload
      };

    case SET_EVENT_CONTACTS:
      return {
        ...state,
        eventContacts: action.payload
      };

    default:
      return state;
  }
}
