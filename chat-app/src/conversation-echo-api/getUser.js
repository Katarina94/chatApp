import request from "./requests";

export const GET_USER_URL = () => "/user";

export const getUser = async () =>
  request({ method: "GET", url: GET_USER_URL() });
