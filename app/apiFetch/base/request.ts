import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// Define the structure of the options parameter
interface RequestOptions extends AxiosRequestConfig {}

// Create an Axios instance with a base URL
const client: AxiosInstance = axios.create({
  baseURL: "https://daily-deals.houseofgeniuses.tech/api",
});

export const request = async (
  options: RequestOptions
): Promise<AxiosResponse> => {
  client.defaults.headers.common.Authorization = `Bearer ${localStorage.getItem(
    "DailyDealsT"
  )}`;
  return client(options).then((res) => res);
};
