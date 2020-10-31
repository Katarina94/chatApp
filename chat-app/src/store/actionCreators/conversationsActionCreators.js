import { createAction } from "@reduxjs/toolkit";

export const fetchConversationsAction = createAction(
  "[CONVERSATION] Fetch Conversations"
);
export const fetchConversationsSuccessAction = createAction(
  "[CONVERSATION] Fetch Conversations Success"
);
export const fetchConversationsFailAction = createAction(
  "[CONVERSATION] Fetch Conversations Fail"
);
