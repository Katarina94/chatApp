import { createReducer } from "@reduxjs/toolkit";

import {
  fetchMessagesAction,
  fetchMessagesSuccessAction,
  fetchMessagesFailAction,
  sendMessageAction,
  sendMessageSuccessAction,
  sendMessageFailAction,
} from "store/actionCreators/messagesActionCreators";

export const messagesInitialState = {
  conversationId: null,
  conversation: {
    isLoading: false,
    isLoaded: false,
    messages: null,
    error: null,
  },
  newMessage: {
    isSending: false,
    args: null,
    data: false,
    error: null,
  },
};

const messagesReducer = createReducer(messagesInitialState, {
  [fetchMessagesAction.type]: (state, action) => {
    state.conversationId = action.payload;
    state.conversation.isLoading = true;
  },
  [fetchMessagesSuccessAction.type]: (state, action) => {
    const { response } = action.payload;
    state.conversation.isLoaded = true;
    state.conversation.isLoading = false;
    state.conversation.messages = response;
  },
  [fetchMessagesFailAction.type]: (state, action) => {
    const { status } = action.payload;
    state.conversation.isLoaded = false;
    state.conversation.isLoading = false;
    state.conversation.error = status;
  },
  [sendMessageAction.type]: (state, action) => {
    const { content } = action.payload;
    state.newMessage.isSending = true;
    state.newMessage.args = content;
  },
  [sendMessageSuccessAction.type]: (state, action) => {
    const response = action.payload;
    state.newMessage.isSending = false;
    state.newMessage.data = response;
  },
  [sendMessageFailAction.type]: (state, action) => {
    const error = action.payload;
    state.newMessage.error = error;
  },
});

export default messagesReducer;
