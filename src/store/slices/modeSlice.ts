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

export default modeSlice.reducer;
