import store from "store/index";

import { getMessages } from "conversation-echo-api/getMessages";
import { postMessage } from "conversation-echo-api/postMessage";
import * as actionCreators from "store/actionCreators/messagesActionCreators";

const { dispatch } = store;

const fetchMessages = async (conversationId, participant) => {
  dispatch(actionCreators.fetchMessagesAction({ conversationId, participant }));
  try {
    const response = await getMessages(conversationId);
    dispatch(
      actionCreators.fetchMessagesSuccessAction({ conversationId, response })
    );
  } catch (error) {
    dispatch(actionCreators.fetchMessagesFailAction(error, conversationId));
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

const clearMessages = () => {
  dispatch(actionCreators.clearMessagesAction());
};

export default {
  fetchMessages,
  sendMessage,
  clearMessages,
};
