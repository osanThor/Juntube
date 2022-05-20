import axios from "axios";

const client = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});

export default client;
