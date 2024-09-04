import { Dispatch } from "@reduxjs/toolkit";
import { authenticate } from "../authSlice"

export const signup = () => {
  return async (dispatch: Dispatch<{ type: string }>) => {
    dispatch(authenticate({ token: '', userData: null }));
  }
}