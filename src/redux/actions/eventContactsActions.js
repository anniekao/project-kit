import { SET_ALL_CONTACTS } from './types';
import { SET_EVENT_CONTACTS } from './types';

import eventService from '../../services/events';

export const getAllContacts = (userId, token) => async dispatch => {
  const allContacts = await eventService.fetchAllContacts(userId,token);

  dispatch({
    type: SET_ALL_CONTACTS,
    payload: allContacts
  });
};

export const getEventContacts = (userId, eventId, token) => async dispatch => {
  const eventContacts = await eventService.fetchEventContacts(userId, eventId, token);

  dispatch({
    type: SET_EVENT_CONTACTS,
    payload: eventContacts.eventContacts
  });
};
