import { createSelector } from "@reduxjs/toolkit";

export const getMessagesState = (state) => state.messages;
export const getConversationId = createSelector(
  getMessagesState,
  (messages) => messages.conversationId
);
export const isConversationSelected = createSelector(
  getConversationId,
  (conversationId) => !!conversationId
);
export const getConversation = createSelector(
  getMessagesState,
  (messagesState) => messagesState.conversation
);
export const getMessages = createSelector(
  getConversation,
  (conversation) => conversation.messages
);
export const getMessageParticipantId = (index) =>
  createSelector(getMessages, (messages) => messages[index].participant?.id);
