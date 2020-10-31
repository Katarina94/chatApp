import { createSelector } from "@reduxjs/toolkit";

export const getConversationsState = (state) => state.conversations;

export const getConversations = createSelector(
  getConversationsState,
  (conversations) => conversations?.conversations
);
