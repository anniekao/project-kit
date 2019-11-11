import axios, { setAuthHeader } from "../axios";

const getUserEventCalendar = async (id, token) => {
  setAuthHeader(token);
  const userEvents = await axios.get(`/users/${id}/calendar`);
  return userEvents;
};

export { getUserEventCalendar };
