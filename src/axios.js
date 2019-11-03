import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:5000/",
  withCredentials: true
});

export const setAuthHeader = cookie => {
  console.log("current token is now " + cookie);
  const token = cookie.split("=")[1];
  axiosApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

export default axiosApi;
