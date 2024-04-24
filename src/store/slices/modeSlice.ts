import { createSlice } from "@reduxjs/toolkit";

export const modeSlice = createSlice({
  name: "mode",
  initialState: {
    mode: false,
  },
  reducers: {
    changeMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { changeMode } = modeSlice.actions;
export default modeSlice.reducer;
