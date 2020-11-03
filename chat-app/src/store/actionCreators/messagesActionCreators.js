import { createAction } from "@reduxjs/toolkit";

export const fetchMessagesAction = createAction("[MESSAGES] Fetch Messages");
export const fetchMessagesSuccessAction = createAction(
  "[MESSAGES] Fetch Messages Success"
);
export const fetchMessagesFailAction = createAction(
  "[MESSAGES] Fetch Messages Fail"
);
export const sendMessageAction = createAction("[MESSAGE] Send Message");
export const sendMessageSuccessAction = createAction(
  "[MESSAGE] Send Message Success"
);
export const sendMessageFailAction = createAction(
  "[MESSAGE] Send Message Fail"
);
export const clearMessagesAction = createAction("[MESSAGE] Clear Messages");
