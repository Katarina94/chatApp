import request from "./requests";

export const POST_MESSAGE_URL = (conversationId) =>
  `/conversations/${conversationId}/messages`;

export const postMessage = async (conversationId, content) =>
  request({
    method: "POST",
    url: POST_MESSAGE_URL(conversationId),
    data: { content },
  });
