import axios from "axios";

export default {
  getAllPortfolio: () => {
    return axios.get("/api/allprojects");
  }
};
