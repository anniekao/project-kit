import { SET_EVENT_CONTACTS } from './types';

import eventService from '../../services/events';

export const getEventContacts = (userId, eventId) => async dispatch => {
  const eventContacts = await eventService.fetchEventContacts(userId, eventId);

  console.log(eventContacts)
  dispatch({
    type: SET_EVENT_CONTACTS,
    payload: eventContacts.eventContacts
  });
};
