import axios, { setAuthHeader } from "../axios";

const getUserEventCalender = async (id, token) => {
  setAuthHeader(token);
  let userEvents = null;
  userEvents = await axios.get(`/users/${id}/calender`);
  return userEvents;
};

export { getUserEventCalender };
