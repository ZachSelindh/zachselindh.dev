import axios from "axios";

const API = {
  getAllPortfolio: () => {
    return axios.get("/api/allprojects");
  },
  getByTech: technology => {
    return axios.get("/api/tech/" + technology);
  }
};

export default API;
