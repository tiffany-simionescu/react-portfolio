import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "https://tiffany-simionescu-portfolio.heroku.com",
    headers: {
      token: token
    }
  });
};
