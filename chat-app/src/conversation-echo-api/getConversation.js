import request from "./requests";

export const GET_CONVERSATIONS_URL = () => "/conversations";

export const getConversations = async () =>
  request({ method: "GET", url: GET_CONVERSATIONS_URL() });
