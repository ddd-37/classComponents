import axios from "axios";

// Create an instance of the axios client
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 1f62b339e2d14f114aae723132d06d9a8f08acf9d81c7b46172d5c3ff79d31ef"
  }
});
