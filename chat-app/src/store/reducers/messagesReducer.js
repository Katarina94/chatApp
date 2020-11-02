import { createReducer } from "@reduxjs/toolkit";

import {
  fetchMessagesAction,
  fetchMessagesSuccessAction,
  fetchMessagesFailAction,
  sendMessageAction,
  sendMessageSuccessAction,
  sendMessageFailAction,
  clearMessagesAction,
} from "store/actionCreators/messagesActionCreators";
import { initialState } from "./rootReducer";

export const messagesInitialState = {
  conversationId: null,
  participant: null,
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
    state.conversationId = action.payload.id;
    state.participant = action.payload.participant;
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
  [clearMessagesAction.type]: () => {
    return messagesInitialState;
  },
});

export default messagesReducer;
