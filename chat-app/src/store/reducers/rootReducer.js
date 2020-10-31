import { combineReducers } from "@reduxjs/toolkit";

import conversationsReducer, {
  conversationsInitialState,
} from "./conversationsReducer";
import messagesReducer, { messagesInitialState } from "./messagesReducer";
import userReducer, { userInitialState } from "./userReducer";

export const initialState = {
  conversations: conversationsInitialState,
  messages: messagesInitialState,
  user: userInitialState,
};

export const rootReducer = () =>
  combineReducers({
    conversations: conversationsReducer,
    messages: messagesReducer,
    user: userReducer,
  });

export default rootReducer;
