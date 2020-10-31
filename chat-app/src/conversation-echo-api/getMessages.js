import request from "./requests";

export const GET_MESSAGES_URL = (conversationId) =>
  `/conversations/${conversationId}/messages`;

export const getMessages = async (conversationId) =>
  request({ method: "GET", url: GET_MESSAGES_URL(conversationId) });
