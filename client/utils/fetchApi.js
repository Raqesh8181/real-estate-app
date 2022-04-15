import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "07023feff9mshf1dbf2d31d05e28p1ab682jsn11e0c53c6f25",
    },
  });

  return data;
};
