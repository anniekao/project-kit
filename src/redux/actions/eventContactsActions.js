import { SET_EVENT_CONTACTS } from './types';

import eventService from '../../services/events';

export const getEventContacts = (userId, eventId, token) => async dispatch => {
  const eventContacts = await eventService.fetchEventContacts(userId, eventId, token);

  console.log(eventContacts)
  dispatch({
    type: SET_EVENT_CONTACTS,
    payload: eventContacts.eventContacts
  });
};
