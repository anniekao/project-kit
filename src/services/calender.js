import axios, { setAuthHeader } from "../axios";

const getUserEventCalender = async id => {
  setAuthHeader(document.cookie);
  let userEvents = null;
  userEvents = await axios.get(`/users/${id}/calender`);
  return userEvents;
};

export { getUserEventCalender };
