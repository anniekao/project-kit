import { SET_EVENT_HISTORY } from './types';

import eventService from '../../services/events';

export const getEventHistory = id => async dispatch => {
  const eventHistory = await eventService.fetchEventHistory(id);

  dispatch({
    type: SET_EVENT_HISTORY,
    payload: eventHistory
  });
};
