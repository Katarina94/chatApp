import { createAction } from "@reduxjs/toolkit";

export const fetchUserAction = createAction("[USER] Fetch User");
export const fetchUserSuccessAction = createAction("[USER] Fetch User Success");
export const fetchUserFailAction = createAction("[USER] Fetch User Fail");
