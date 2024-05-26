import axios, { AxiosRequestConfig, AxiosInstance } from "axios";
import { cookies } from "next/headers";

export const axiosInstance = axios.create({
  baseURL: "https://thinkmate-backend-production.up.railway.app/v1",
  headers: {
    "Content-Type": "application/json", // Set Content-Type for all requests
  },
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // Aggregate conditions where no token is needed
    const noTokenNeeded = ["auth", "pengajar/login", "pengajar/register", "siswa"].some(path => config.url?.includes(path));
    if (noTokenNeeded) {
      return config;
    }

    const res = await fetch("/api/auth/token"); 
    const resData = await res.json();
    const token = resData?.token;

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

// handle post req
export const postFetcher = (url: string, data: any) => {
  return axiosInstance.post(url, data).then((res) => res.data);
};

// handle get req
export const getFetcher = (url: string) => {
  return axiosInstance.get(url).then((res) => res.data);
};

export default fetcher;
