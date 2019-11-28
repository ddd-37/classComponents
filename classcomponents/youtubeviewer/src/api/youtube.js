import axios from "axios";

const KEY = "AIzaSyBi_vujr0wu-kio8f0vFfmyVMTCIHEu5U4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
