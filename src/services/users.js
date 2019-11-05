import axios from 'axios';

const baseUrl = "http://localhost:5000"; // TODO:Replace with Heroku backend url

const getAll = async () => {
  const res = await axios.get(`${baseUrl}/users`);
  return res.data;
}

const getUser = async (id) => {
  const res = await axios.get(`${baseUrl}/users/${id}`);
  return res.data;
}

const createUser = async (userObj, token) => {
  const config = {
    headers: { Authorization: token }
  }
  const res = await axios.post(`${baseUrl}/users`, userObj, config);
  return res.data
}


export default {
  getAll,
  getUser,
  createUser
}