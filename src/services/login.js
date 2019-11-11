import axios from 'axios';

const baseUrl = 'http://localhost:5000';

const login = async (credentials) => {
  console.log("======creds=======", credentials)
  const res = await axios.post(`${baseUrl}/login`, credentials);
  return res.data;
}

export default {
  login
}