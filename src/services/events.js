import axios, { setAuthHeader } from '../axios';

// const baseUrl = 'http://localhost:5000';

const fetchEventHistory = async (id, token) => {
  setAuthHeader(token);
  try {
    const res = await axios.get(`/users/${id}/history`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchAllContacts = async (userId, token) => {
  setAuthHeader(token);
  try {
    const res = await axios.get(`/users/${userId}/contacts`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

const fetchEventContacts = async (userId, eventId, token) => {
  setAuthHeader(token);
  try {
    const res = await axios.get(`/users/${userId}/events/${eventId}`);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};

export default {
  fetchEventHistory,
  fetchAllContacts,
  fetchEventContacts
};
