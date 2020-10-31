import { createSelector } from "@reduxjs/toolkit";

export const getUserState = (state) => state.user;

export const getUser = createSelector(
  getUserState,
  (userState) => userState.user
);

export const getUserId = createSelector(getUser, (user) => user.id);
