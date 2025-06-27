import axios from "axios";

const YOUR_ACCESS_KEY = "Ie9B2GxY7jVrs2xdRvRLkaN6NvlK86Aop__jYesiue8";
axios.defaults.baseURL = "https://api.unsplash.com/search";

export const fetchImages = async (query, page) => {
  const searchParams = new URLSearchParams({
    client_id: YOUR_ACCESS_KEY,
    query,
    page,
    per_page: 12,
    orientation: "landscape",
  });
  const response = await axios.get(`photos?${searchParams}`);
  return response.data;
};
