import { FETCH_EVENT_FEED } from './types';

import axios from "../../axios";

export const fetchEventFeed = () => dispatch => {
  axios.get("/events")
    .then(resp =>
      dispatch({
        type: FETCH_EVENT_FEED,
        payload: resp.data
      })
    )
    .catch(err => {
      console.log(err);
    });
};
