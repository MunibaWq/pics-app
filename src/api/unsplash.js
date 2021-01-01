import axios from "axios";

// with axios you can set up a pre-configured instance of the axios client that has default properties set for where its going to makes a request to or headers or even params if you wanted to as well

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: process.env.REACT_APP_UNSPLASH_API_KEY,
  },
});
