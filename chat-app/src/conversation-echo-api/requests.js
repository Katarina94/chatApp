import axios from "axios";

const BASE_URL =
  "https://csjar37r18.execute-api.eu-central-1.amazonaws.com/dev";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

const request = (config) =>
  axiosInstance.request(config).then((res) => res.data);

export default request;
