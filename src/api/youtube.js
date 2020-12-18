import axios from "axios";
const KEY = "AIzaSyAs-MvyYgUha22KLH62oJ5X8p1m361DadQ";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
