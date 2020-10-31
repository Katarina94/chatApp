import { createReducer } from "@reduxjs/toolkit";

import {
  fetchUserAction,
  fetchUserSuccessAction,
  fetchUserFailAction,
} from "store/actionCreators/userActionCreators";

export const userInitialState = {
  loading: false,
  loaded: false,
  user: null,
  error: null,
};

const userReducer = createReducer(userInitialState, {
  [fetchUserAction.type]: (state) => {
    state.loading = true;
  },
  [fetchUserSuccessAction.type]: (state, action) => {
    const data = action.payload;
    state.loaded = true;
    state.loading = false;
    state.user = data;
  },
  [fetchUserFailAction.type]: (state, action) => {
    const { status } = action.payload.response;
    state.loaded = false;
    state.loading = false;
    state.error = status;
  },
});

export default userReducer;
