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

export default {
  fetchEventHistory
};
