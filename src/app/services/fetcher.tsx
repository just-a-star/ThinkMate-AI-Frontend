import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://thinkmate-backend-production.up.railway.app/v1",
  headers: {
    "Content-Type": "application/json", // Set Content-Type for all requests
  },
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

// handle post req
export const postFetcher = (url: string, data: any) => {
  return axiosInstance.post(url, data).then((res) => res.data);
};

// handle get req
export const getFetcher = (url: string, data:any) => {
  return axiosInstance.get(url).then((res) => res.data);
};

export default fetcher;
