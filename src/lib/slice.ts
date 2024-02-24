import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { User, Story } from "../types";

const initialState = {
  story: {
    id: "",
    message: "",
    options: [],
  } as Story
};

export const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setStory: (state, action: PayloadAction<Story>) => {
      state.story = action.payload;
    }
  }
});

export const { setStory } = slice.actions;
export default slice.reducer;