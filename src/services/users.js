import axios, { setAuthHeader } from "../axios";

// const baseUrl = "http://localhost:5000"; // TODO:Replace with Heroku backend url
const getCurrentUser = async token => {
  // setAuthHeader()
  axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${token.access_token}`;
  console.log("token is now in get current" + JSON.stringify(token));
  const res = await axios.get(`/users/current`);
  return res.data;
};

const getAll = async (token) => {
  setAuthHeader(token)
  const res = await axios.get(`/users`);
  return res.data;
};

const getUser = async (id, token) => {
  setAuthHeader(token)
  const res = await axios.get(`/users/${id}`);
  return res.data;
};

// const createUser = async userObj => {
//   const res = await axios.post(`/users`, userObj);
//   return res.data;
// };

const updateUser = async (id, userObj, token) => {
  setAuthHeader(token)
  const res = await axios.put(`/users/${id}`, userObj);
  return res.data;
};

export default {
  getAll,
  getUser,
  // createUser,
  updateUser,
  getCurrentUser
};
