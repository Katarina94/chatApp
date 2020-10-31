import store from "store/index";

import { getConversations } from "conversation-echo-api/getConversation";
import * as actionCreators from "store/actionCreators/conversationsActionCreators";

const { dispatch } = store;

const fetchCoversations = async () => {
  dispatch(actionCreators.fetchConversationsAction());
  try {
    const response = await getConversations();
    dispatch(actionCreators.fetchConversationsSuccessAction(response));
  } catch (error) {
    dispatch(actionCreators.fetchConversationsFailAction(error));
  }
};

export default {
  fetchCoversations,
};
