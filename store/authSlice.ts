import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

type initialStateType = {
  token: null,
  userData: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {} as initialStateType,
  reducers: {
    authenticate: (state, action: PayloadAction<any>) => {
      const { payload } = action;
      state.token = payload.token;
      state.userData = payload.userData;
    }
  }
});

export const { 
  authenticate,
} = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth;
export default authSlice.reducer;