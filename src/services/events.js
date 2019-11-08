import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const fetchEventHistory = async id => {
  try {
    const res = await axios.get(`${baseUrl}/users/${id}/history`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchEventContacts = async (userId, eventId) => {
  try {
    const res = await axios.get(`${baseUrl}/users/${userId}/events/${eventId}`)
    return res.data;
  } catch (error) {
    console.log(error);
  }
}

export default {
  fetchEventHistory,
  fetchEventContacts
};
