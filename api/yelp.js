import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer qL3tIdhL3yt5kDSj-0XSlLi1-kfFZAVSNclAzZqnqs5ZcDncxq9nvuUyrsMn_hoyL1MQFFotcur-tSKu0vc0NE3JrvbLlaOwH2bykp2ry1LMLxA0JXIJujSeRj_NZHYx",
  },
});
