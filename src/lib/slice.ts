import { PayloadAction } from "@reduxjs/toolkit";
import { createAppSlice } from "../app/createAppSlice";
import { RootState } from "../app/store";

const initialState = {};

export const slice = createAppSlice({
  name: "app",
  initialState,
  reducers: {}
});

export const { } = slice.actions;
export default slice.reducer;