import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://some-domain.com/api/",
  headers: {
    "Content-Type": "application/json",
    // "Access-Control-Allow-Origin": "*",
  },
});
