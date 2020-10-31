import store from "store/index";

import { getMessages } from "conversation-echo-api/getMessages";
import { postMessage } from "conversation-echo-api/postMessage";
import * as actionCreators from "store/actionCreators/messagesActionCreators";

const { dispatch } = store;

const fetchMessages = async (id) => {
  dispatch(actionCreators.fetchMessagesAction(id));
  try {
    const response = await getMessages(id);
    dispatch(actionCreators.fetchMessagesSuccessAction({ id, response }));
  } catch (error) {
    dispatch(actionCreators.fetchMessagesFailAction(error, id));
  }
};

const sendMessage = async (id, content) => {
  dispatch(actionCreators.sendMessageAction(id, content));
  try {
    const response = await postMessage(id, content);
    dispatch(actionCreators.sendMessageSuccessAction({ id, response }));
  } catch (error) {
    dispatch(actionCreators.sendMessageFailAction(error, id));
  }
};

export default {
  fetchMessages,
  sendMessage,
};
