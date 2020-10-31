import { createReducer } from "@reduxjs/toolkit";

import {
  fetchConversationsAction,
  fetchConversationsSuccessAction,
  fetchConversationsFailAction,
} from "store/actionCreators/conversationsActionCreators";

export const conversationsInitialState = {
  loading: false,
  loaded: false,
  conversations: null,
  error: null,
};

const conversationsReducer = createReducer(conversationsInitialState, {
  [fetchConversationsAction.type]: (state) => {
    state.loading = true;
  },
  [fetchConversationsSuccessAction.type]: (state, action) => {
    const data = action.payload;
    state.loaded = true;
    state.loading = false;
    state.conversations = data;
  },
  [fetchConversationsFailAction.type]: (state, action) => {
    const { status } = action.payload.response;
    state.loaded = false;
    state.loading = false;
    state.error = status;
  },
});

export default conversationsReducer;
