import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    // baseURL: "https://tiffany-simionescu-portfolio.heroku.com",
    baseURL: "http://127.0.0.1:5050",
    headers: {
      token: token
    }
  });
};
