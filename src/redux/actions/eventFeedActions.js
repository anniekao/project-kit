import { FETCH_EVENT_FEED } from './types';

import axios from 'axios';

export const fetchEventFeed = () => dispatch => {
  axios
    .get('/events')
    .then(resp =>
      dispatch({
        type: FETCH_EVENT_FEED,
        payload: resp.data
      })
    )
    .catch(err => {
      console.log(err);
    });

  // let url = 'https://www.eventbriteapi.com/v3/events/search/?';

  // const params = {
  //   q: 'tech%20events',
  //   'location.address': 'toronto',
  //   'location.within': '25km',
  //   // category id 102 for science and tech
  //   categories: '102',
  //   expand: 'venue'
  // };

  // Object.keys(params).forEach(function(key) {
  //   url[url.length - 1] === '?'
  //     ? (url += key + '=' + params[key])
  //     : (url += '&' + key + '=' + params[key]);
  // });

  // axios.get(url, {
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${process.env.REACT_APP_EVENTBRITE}`
  //   }
  // })
  //   .then(resp =>
  //     dispatch({
  //       type: FETCH_EVENT_FEED,
  //       payload: resp.data.events
  //     })
  //   )
  //   .catch(err => {
  //     console.log(err);
  //   });
};
